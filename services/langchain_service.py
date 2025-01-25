from langchain_openai import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
import logging
import os

class LangChainService:
    def __init__(self):
        try:
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
            logging.info("LangChain service initialized successfully")
        except Exception as e:
            logging.error(f"LangChain initialization error: {str(e)}")
            raise

    def get_response(self, input_text):
        """Generate AI response"""
        try:
            response = self.chain.run(input=input_text)
            return response
        except Exception as e:
            logging.error(f"Error generating response: {str(e)}")
            return "I apologize, but I'm having trouble processing your request."

    def process_document(self, document_text):
        """Process document content"""
        try:
            response = self.chain.run(input=f"Please analyze this document: {document_text}")
            return response
        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"