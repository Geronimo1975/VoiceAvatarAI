import logging
from crewai import Agent, Task, Crew
from langchain_core.language_models import BaseLLM
from typing import List, Dict, Optional

class CrewAIService:
    def __init__(self, llm: BaseLLM):
        self.llm = llm
        self.setup_agents()

    def setup_agents(self):
        """Initialize the AI agents for different tasks"""
        try:
            self.conversation_agent = Agent(
                role='Conversation Manager',
                goal='Manage and improve conversation flow with users',
                backstory='Expert in natural conversation and context management',
                verbose=True,
                allow_delegation=False,
                llm=self.llm
            )

            self.document_agent = Agent(
                role='Document Processor',
                goal='Process and analyze documents efficiently',
                backstory='Specialist in extracting and analyzing information from documents',
                verbose=True,
                allow_delegation=False,
                llm=self.llm
            )

            self.language_agent = Agent(
                role='Language Expert',
                goal='Handle translations and maintain conversation quality',
                backstory='Expert in multiple languages and natural conversation',
                verbose=True,
                allow_delegation=False,
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
            task = Task(
                description=f"Process and respond to user message: {message}",
                agent=self.conversation_agent,
                context=context or {}
            )

            result = self.crew.kickoff(tasks=[task])
            return result

        except Exception as e:
            logging.error(f"Error processing conversation: {str(e)}")
            return "I apologize, but I'm having trouble processing your message."

    def process_document(self, document_text: str) -> str:
        """Process document using document agent"""
        try:
            task = Task(
                description=f"Analyze and summarize document content",
                agent=self.document_agent,
                context={"document": document_text}
            )

            result = self.crew.kickoff(tasks=[task])
            return result

        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"

    def translate_content(self, text: str, target_language: str) -> str:
        """Translate content using language agent"""
        try:
            task = Task(
                description=f"Translate text to {target_language}",
                agent=self.language_agent,
                context={"text": text, "target_language": target_language}
            )

            result = self.crew.kickoff(tasks=[task])
            return result

        except Exception as e:
            logging.error(f"Error translating content: {str(e)}")
            return f"Error translating to {target_language}"