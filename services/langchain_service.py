from langchain_openai import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
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
            self.memory = ConversationBufferWindowMemory(k=5)
            self.prompt = PromptTemplate(
                input_variables=["history", "input"],
                template="Based on the conversation history: {history}\nHuman: {input}\nAI:"
            )
            self.chain = LLMChain(
                llm=self.llm,
                prompt=self.prompt,
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
                "conversation_history": self.memory.load_memory_variables({}),
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