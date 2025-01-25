import os
from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
import logging

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
    logging.info(f'Received message: {data}')
    # Here we'll integrate with LangChain service for responses
    response = {"message": "AI response placeholder"}
    socketio.emit('response', response)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
