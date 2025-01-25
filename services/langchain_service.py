from langchain_openai import OpenAI
from langchain.chains import ConversationChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
import logging
import os
from datetime import datetime

class LangChainService:
    def __init__(self):
        try:
            self.llm = OpenAI(
                temperature=0.7,
                max_tokens=2000
            )

            # Initialize memory with proper configuration
            self.memory = ConversationBufferMemory(
                memory_key="chat_history",
                return_messages=True
            )

            # Create a prompt template that matches memory configuration
            self.prompt = PromptTemplate(
                input_variables=["chat_history", "input"],
                template="""
                Assistant: I am your AI Digital Twin assistant. I help you communicate effectively and naturally.

                Current conversation:
                {chat_history}
                Human: {input}
                Assistant:"""
            )

            # Initialize conversation chain with correct configuration
            self.chain = ConversationChain(
                llm=self.llm,
                memory=self.memory,
                prompt=self.prompt,
                verbose=True
            )

            logging.info("Enhanced LangChain service initialized successfully")
        except Exception as e:
            logging.error(f"LangChain initialization error: {str(e)}")
            raise

    def get_response(self, input_text):
        """Generate AI response with conversational memory"""
        try:
            # Generate response using the conversation chain
            response = self.chain.predict(input=input_text)
            return response
        except Exception as e:
            logging.error(f"Error generating response: {str(e)}")
            return "I apologize, but I'm having trouble processing your request. Let me try to help you differently."

    def process_document(self, document_text):
        """Process document content with context awareness"""
        try:
            # Get current conversation history
            history = self.memory.load_memory_variables({})

            # Create document-specific prompt
            prompt = f"""
            Based on our previous conversation and this document, provide a detailed analysis:

            Previous conversation:
            {history.get('chat_history', '')}

            Document content: {document_text}

            Please analyze this document in the context of our discussion.
            """

            response = self.chain.predict(input=prompt)
            return response
        except Exception as e:
            logging.error(f"Error processing document: {str(e)}")
            return "Error processing document"