from app import db
from datetime import datetime

class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    message = db.Column(db.Text, nullable=False)
    response = db.Column(db.Text, nullable=False)
    voice_clone_id = db.Column(db.String(100))
    
class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text)
    uploaded_at = db.Column(db.DateTime, default=datetime.utcnow)
