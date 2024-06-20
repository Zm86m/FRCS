document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const displayMessage = document.getElementById('displayMessage');

    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = document.getElementById('messageInput').value;
            window.location.href = `message.html?message=${encodeURIComponent(message)}`;
        });
    }

    if (displayMessage) {
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get('message');
        displayMessage.textContent = message ? decodeURIComponent(message) : 'No message received.';
    }
});
