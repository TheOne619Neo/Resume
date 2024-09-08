const textElement = document.getElementById('text');
const messages = ["Follow the white Rabbit ...", "to be continued_"];
let messageIndex = 0;

function typeMessage() {
    textElement.textContent = '';
    const message = messages[messageIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        if (charIndex < message.length) {
            textElement.textContent += message[charIndex];
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                textElement.textContent = '';
                messageIndex = (messageIndex + 1) % messages.length;
                setTimeout(typeMessage, 1000);
            }, 2000);
        }
    }, 100);
}

typeMessage();
