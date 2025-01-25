from langchain.llms import LlamaCpp
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
import logging

class LangChainService:
    def __init__(self):
        try:
            self.llm = LlamaCpp(
                model_path="models/llama-2-7b-chat.gguf",
                temperature=0.7,
                max_tokens=2000,
                top_p=1
            )
            self.memory = ConversationBufferMemory()
            self.conversation = ConversationChain(
                llm=self.llm,
                memory=self.memory,
                verbose=True
            )
        except Exception as e:
            logging.error(f"LangChain initialization error: {str(e)}")
            raise

    def get_response(self, input_text):
        """Generate AI response using LangChain"""
        try:
            response = self.conversation.predict(input=input_text)
            return response
        except Exception as e:
            logging.error(f"Error generating response: {str(e)}")
            return "I apologize, but I'm having trouble processing your request."

    def process_document(self, document_text):
        """Process document content using LangChain"""
        try:
            response = self.conversation.predict(
                input=f"Please analyze this document: {document_text}"
            )
            return response
        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"
