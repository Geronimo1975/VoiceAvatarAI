import logging
from crewai import Agent, Task, Crew
from langchain_core.language_models import BaseLLM
from typing import List, Dict, Optional
from services.language_service import LanguageService

class CrewAIService:
    def __init__(self, llm: BaseLLM):
        self.llm = llm
        self.language_service = LanguageService()
        self.setup_agents()

    def setup_agents(self):
        """Initialize the AI agents for different tasks"""
        try:
            self.conversation_agent = Agent(
                role='Conversation Manager',
                goal='Manage and improve conversation flow with users',
                backstory='Expert in natural conversation and context management',
                verbose=True,
                allow_delegation=True,
                llm=self.llm
            )

            self.document_agent = Agent(
                role='Document Processor',
                goal='Process and analyze documents efficiently',
                backstory='Specialist in extracting and analyzing information from documents',
                verbose=True,
                allow_delegation=True,
                llm=self.llm
            )

            self.language_agent = Agent(
                role='Language Expert',
                goal='Handle translations and maintain conversation quality',
                backstory='Expert in multiple languages and natural conversation, specializing in English and German',
                verbose=True,
                allow_delegation=True,
                llm=self.llm
            )

            self.crew = Crew(
                agents=[self.conversation_agent, self.document_agent, self.language_agent],
                tasks=[],
                verbose=True
            )

        except Exception as e:
            logging.error(f"Error setting up CrewAI agents: {str(e)}")
            raise

    def process_conversation(self, message: str, context: Optional[Dict] = None) -> str:
        """Process user message using conversation agent"""
        try:
            # Detect message language
            source_language = self.language_service.detect_language(message)

            # Create context with language information
            context = context or {}
            context.update({
                "source_language": source_language,
                "supported_languages": self.language_service.supported_languages
            })

            # Process in English if necessary
            if source_language != 'en':
                english_message = self.language_service.translate(message, 'en', source_language)
                context["original_message"] = message
                message = english_message

            # Get AI response
            task = Task(
                description=f"Process and respond to user message: {message}",
                agent=self.conversation_agent,
                context=context
            )

            result = self.crew.kickoff(tasks=[task])

            # Translate response back if necessary
            if source_language != 'en':
                result = self.language_service.translate(result, source_language, 'en')

            return result

        except Exception as e:
            logging.error(f"Error processing conversation: {str(e)}")
            return "I apologize, but I'm having trouble processing your message."

    def process_document(self, document_text: str) -> str:
        """Process document using document agent"""
        try:
            source_language = self.language_service.detect_language(document_text)

            # Translate to English for processing if needed
            if source_language != 'en':
                document_text = self.language_service.translate(document_text, 'en', source_language)

            task = Task(
                description=f"Analyze and summarize document content",
                agent=self.document_agent,
                context={"document": document_text, "original_language": source_language}
            )

            result = self.crew.kickoff(tasks=[task])

            # Translate result back if needed
            if source_language != 'en':
                result = self.language_service.translate(result, source_language, 'en')

            return result

        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"

    def translate_content(self, text: str, target_language: str) -> str:
        """Translate content using language service"""
        try:
            return self.language_service.translate(text, target_language)
        except Exception as e:
            logging.error(f"Error translating content: {str(e)}")
            return f"Error translating to {target_language}"