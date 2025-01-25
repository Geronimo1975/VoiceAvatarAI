# AI Digital Twin System

Advanced conversational AI system enabling multi-channel communication through intelligent interaction capabilities and adaptive AI technologies. This system creates a personalized digital twin capable of handling voice calls, messaging, and video interactions with sophisticated natural language understanding.

## 🚀 Core Features

- **Voice Cloning Integration**: Utilizes ElevenLabs API for high-fidelity voice replication
- **Multi-Channel Communication**: 
  - Automated phone calls (Twilio Voice API)
  - WhatsApp messaging in English & German
  - Video meeting participation (HeyGen + OBS)
- **Document Processing**: Intelligent PDF analysis and contextual response generation
- **Advanced Conversational AI**: LangChain + Llama integration for natural dialogue
- **Workflow Automation**: CrewAI for sophisticated task orchestration
- **Dynamic UI**: Modern, responsive interface without mandatory authentication

## 🛠 Technology Stack

- **Backend Framework**: Flask + Python 3.11
- **AI/ML Components**:
  - LangChain for conversation management
  - Llama for core language processing
  - Hugging Face Transformers for multilingual support
- **Integration Services**:
  - ElevenLabs (Voice Synthesis)
  - Twilio (Communication)
  - HeyGen (Avatar Generation)
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Real-time Communication**: Flask-SocketIO
- **Frontend**: Dynamic HTML/CSS/JS with WebSocket support

## 📋 Prerequisites

```bash
# System Requirements
- Python 3.11+
- PostgreSQL 13+
- FFmpeg (for audio processing)
```

## 🔧 Installation

1. **Clone the Repository**
```bash
git clone <repository-url>
cd ai-digital-twin
```

2. **Install Dependencies**
```bash
# Install Python packages
pip install -r requirements.txt
```

3. **Environment Configuration**
Create a `.env` file with the following variables:
```env
# Core Configuration
FLASK_SECRET_KEY=your_secret_key
DATABASE_URL=postgresql://user:password@localhost:5432/digital_twin

# API Keys
OPENAI_API_KEY=your_openai_key
ELEVENLABS_API_KEY=your_elevenlabs_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number
HEYGEN_API_KEY=your_heygen_key
```

## 🚀 Quick Start

1. **Initialize Database**
```bash
flask db upgrade
```

2. **Start Development Server**
```bash
python main.py
```

The application will be available at `http://localhost:5000`

## 🔍 Core Components

### Voice Cloning Service
```python
from services.elevenlabs_service import ElevenLabsService

voice_service = ElevenLabsService()
cloned_voice_id = voice_service.clone_voice(audio_file)
```

### Conversational AI
```python
from services.langchain_service import LangChainService

ai_service = LangChainService()
response = ai_service.get_response(user_message)
```

### Document Processing
```python
from services.pdf_service import PDFService

pdf_service = PDFService()
extracted_text = pdf_service.process_pdf(pdf_file)
```

## 🔧 Advanced Configuration

### LangChain Configuration
The system uses a custom LangChain configuration for enhanced conversation management:

```python
class LangChainService:
    def __init__(self):
        self.llm = OpenAI(
            temperature=0.7,
            max_tokens=2000
        )
        self.memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True
        )
```

### CrewAI Workflow
Automated task orchestration is handled through CrewAI:

```python
class CrewAIService:
    def __init__(self, llm: BaseLLM):
        self.conversation_agent = Agent(
            role='Conversation Manager',
            goal='Manage conversation flow',
            backstory='Expert in context management',
            verbose=True,
            llm=llm
        )
```

## 📚 API Documentation

### Voice Cloning Endpoint
```http
POST /clone-voice
Content-Type: multipart/form-data

file: <audio_file>
```

### Message Processing
```http
POST /api/message
Content-Type: application/json

{
    "text": "message_content",
    "language": "en|de"
}
```

## 🧪 Testing

```bash
# Run unit tests
python -m pytest tests/

# Run integration tests
python -m pytest tests/integration/
```

## 🔐 Security Considerations

- All API keys are managed through environment variables
- WebSocket connections are authenticated
- Rate limiting is implemented on all API endpoints
- Input validation and sanitization for all user inputs
- Secure file handling for document processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Submit a pull request with detailed description

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
