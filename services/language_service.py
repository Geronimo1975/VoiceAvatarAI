import logging
from typing import Optional
from langdetect import detect
from transformers import MarianMTModel, MarianTokenizer

class LanguageService:
    def __init__(self):
        self.supported_languages = {
            'en': 'English',
            'de': 'German'
        }
        self.translation_models = {}
        try:
            self._initialize_models()
            logging.info("Translation models initialized successfully")
        except Exception as e:
            logging.error(f"Error initializing translation models: {str(e)}")
            # Continue without translation capabilities
            pass

    def _initialize_models(self):
        """Initialize translation models with proper error handling"""
        model_pairs = {
            'de-en': 'Helsinki-NLP/opus-mt-de-en',
            'en-de': 'Helsinki-NLP/opus-mt-en-de'
        }

        for pair, model_name in model_pairs.items():
            try:
                self.translation_models[pair] = {
                    'model': MarianMTModel.from_pretrained(model_name),
                    'tokenizer': MarianTokenizer.from_pretrained(model_name)
                }
            except Exception as e:
                logging.error(f"Error loading model {model_name}: {str(e)}")
                # Skip this model pair if it fails to load
                continue

    def detect_language(self, text: str) -> str:
        """Detect the language of input text with fallback to English"""
        try:
            detected = detect(text)
            return detected if detected in self.supported_languages else 'en'
        except:
            return 'en'  # Default to English if detection fails

    def translate(self, text: str, target_language: str, source_language: Optional[str] = None) -> str:
        """Translate text to target language with proper error handling"""
        try:
            if not source_language:
                source_language = self.detect_language(text)

            if source_language == target_language:
                return text

            model_key = f"{source_language}-{target_language}"
            if model_key not in self.translation_models:
                logging.warning(f"Translation model not available for {model_key}")
                return text

            model = self.translation_models[model_key]['model']
            tokenizer = self.translation_models[model_key]['tokenizer']

            # Tokenize and translate
            inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512)
            translated = model.generate(**inputs)
            result = tokenizer.decode(translated[0], skip_special_tokens=True)

            return result

        except Exception as e:
            logging.error(f"Translation error: {str(e)}")
            return text  # Return original text if translation fails