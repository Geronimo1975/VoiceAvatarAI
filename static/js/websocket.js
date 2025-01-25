let socket;

function initializeWebSocket() {
    socket = io();

    socket.on('connect', () => {
        addMessage('System', 'Connected to AI Digital Twin');
    });

    socket.on('disconnect', () => {
        addMessage('System', 'Disconnected from AI Digital Twin');
    });

    socket.on('response', (data) => {
        addMessage('AI', data.message);
    });
}

function sendMessage(message) {
    if (socket && socket.connected) {
        socket.emit('message', { text: message });
        addMessage('You', message);
    } else {
        addMessage('System', 'Connection error. Please try again.');
    }
}
