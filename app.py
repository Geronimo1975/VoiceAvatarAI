import os
from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
import logging
from services.langchain_service import LangChainService

# Configure logging
logging.basicConfig(level=logging.DEBUG)

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)
socketio = SocketIO(app)

# Configuration
app.config['SECRET_KEY'] = os.environ.get("FLASK_SECRET_KEY", "dev_key")
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL", "sqlite:///digital_twin.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

db.init_app(app)

# Initialize LangChain service with CrewAI integration
langchain_service = None
try:
    langchain_service = LangChainService()
except Exception as e:
    logging.error(f"Error initializing LangChain service: {str(e)}")

# Import routes after app initialization
from routes import *

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def handle_connect():
    logging.info('Client connected')

@socketio.on('message')
def handle_message(data):
    try:
        logging.info(f'Received message: {data}')
        if not langchain_service:
            raise Exception("LangChain service not initialized")

        # Process message using CrewAI workflow
        response = langchain_service.get_response(data['text'])
        socketio.emit('response', {"message": response})

    except Exception as e:
        logging.error(f"Error processing message: {str(e)}")
        socketio.emit('response', {
            "message": "I apologize, but I'm having trouble processing your request.",
            "error": True
        })

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)