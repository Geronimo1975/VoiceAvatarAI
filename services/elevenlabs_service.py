import os
import requests
import logging

ELEVENLABS_API_KEY = os.environ.get('ELEVENLABS_API_KEY')
ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1"

class ElevenLabsService:
    def __init__(self):
        self.headers = {
            "xi-api-key": ELEVENLABS_API_KEY,
            "Content-Type": "application/json"
        }
    
    def clone_voice(self, audio_file):
        """Clone a voice using ElevenLabs API"""
        try:
            url = f"{ELEVENLABS_API_URL}/voices/add"
            files = {
                'files': ('voice.mp3', audio_file, 'audio/mpeg'),
                'name': 'Digital Twin Voice'
            }
            response = requests.post(url, headers=self.headers, files=files)
            return response.json()
        except Exception as e:
            logging.error(f"Voice cloning error: {str(e)}")
            return None

    def generate_speech(self, text, voice_id):
        """Generate speech from text using a cloned voice"""
        try:
            url = f"{ELEVENLABS_API_URL}/text-to-speech/{voice_id}"
            payload = {
                "text": text,
                "model_id": "eleven_monolingual_v1"
            }
            response = requests.post(url, headers=self.headers, json=payload)
            return response.content
        except Exception as e:
            logging.error(f"Speech generation error: {str(e)}")
            return None
