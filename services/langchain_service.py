from langchain_community.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from services.crewai_service import CrewAIService
import logging
import os

class LangChainService:
    def __init__(self):
        try:
            # Initialize with OpenAI for better compatibility
            self.llm = OpenAI(
                temperature=0.7,
                max_tokens=2000
            )
            self.memory = ConversationBufferMemory()
            self.conversation = ConversationChain(
                llm=self.llm,
                memory=self.memory,
                verbose=True
            )
            self.crew_service = CrewAIService(llm=self.llm)
            logging.info("LangChain service initialized successfully")
        except Exception as e:
            logging.error(f"LangChain initialization error: {str(e)}")
            raise

    def get_response(self, input_text):
        """Generate AI response using CrewAI workflow"""
        try:
            context = {
                "conversation_history": self.memory.chat_memory.messages,
                "current_input": input_text
            }
            response = self.crew_service.process_conversation(input_text, context)
            return response
        except Exception as e:
            logging.error(f"Error generating response: {str(e)}")
            return "I apologize, but I'm having trouble processing your request."

    def process_document(self, document_text):
        """Process document content using CrewAI workflow"""
        try:
            response = self.crew_service.process_document(document_text)
            return response
        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"