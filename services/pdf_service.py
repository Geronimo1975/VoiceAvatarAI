import PyPDF2
import io
import logging
from werkzeug.utils import secure_filename

class PDFService:
    @staticmethod
    def process_pdf(pdf_file):
        """Process uploaded PDF file and extract text"""
        try:
            # Create a PDF reader object
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_file.read()))
            
            # Extract text from all pages
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
                
            return text
        except Exception as e:
            logging.error(f"PDF processing error: {str(e)}")
            return None

    @staticmethod
    def validate_pdf(filename):
        """Validate PDF file"""
        return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'pdf'

    @staticmethod
    def save_pdf(pdf_file):
        """Save PDF file securely"""
        try:
            filename = secure_filename(pdf_file.filename)
            # Save logic here (if needed)
            return filename
        except Exception as e:
            logging.error(f"PDF save error: {str(e)}")
            return None
