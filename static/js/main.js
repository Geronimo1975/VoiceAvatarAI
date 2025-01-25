document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    const messageInput = document.querySelector('#message-input');
    const sendButton = document.querySelector('#send-button');
    const fileUpload = document.querySelector('#file-upload');
    
    // Initialize WebSocket connection
    initializeWebSocket();

    // Send message handler
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    // Enter key handler
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });

    // File upload handler
    fileUpload.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/upload-pdf', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                addMessage('System', `PDF processed: ${result.message}`);
            } catch (error) {
                addMessage('System', 'Error processing PDF file');
                console.error('Upload error:', error);
            }
        } else {
            addMessage('System', 'Please upload a PDF file');
        }
    });

    // Helper function to add messages to chat
    window.addMessage = function(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `
            <strong>${sender}:</strong>
            <p>${text}</p>
        `;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});

// Voice recording functionality
let mediaRecorder;
let audioChunks = [];

function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };
            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                await uploadVoiceSample(audioBlob);
                audioChunks = [];
            };
            mediaRecorder.start();
            document.querySelector('#record-button').textContent = 'Stop Recording';
        });
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        document.querySelector('#record-button').textContent = 'Record Voice';
    }
}

async function uploadVoiceSample(audioBlob) {
    const formData = new FormData();
    formData.append('voice', audioBlob);

    try {
        const response = await fetch('/clone-voice', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        addMessage('System', `Voice cloning: ${result.message}`);
    } catch (error) {
        addMessage('System', 'Error cloning voice');
        console.error('Voice cloning error:', error);
    }
}
