import os
from twilio.rest import Client
import logging

class TwilioService:
    def __init__(self):
        self.account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
        self.auth_token = os.environ.get('TWILIO_AUTH_TOKEN')
        self.phone_number = os.environ.get('TWILIO_PHONE_NUMBER')
        self.client = Client(self.account_sid, self.auth_token)

    def send_message(self, to_number, message):
        """Send WhatsApp message using Twilio"""
        try:
            message = self.client.messages.create(
                from_=f'whatsapp:{self.phone_number}',
                body=message,
                to=f'whatsapp:{to_number}'
            )
            return message.sid
        except Exception as e:
            logging.error(f"Error sending WhatsApp message: {str(e)}")
            return None

    def make_call(self, to_number, twiml_url):
        """Make phone call using Twilio"""
        try:
            call = self.client.calls.create(
                from_=self.phone_number,
                to=to_number,
                url=twiml_url
            )
            return call.sid
        except Exception as e:
            logging.error(f"Error making call: {str(e)}")
            return None
