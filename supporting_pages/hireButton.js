document.addEventListener('DOMContentLoaded', () => {
    const hireMeButton = document.getElementById('hireMeButton');
    const congratulationsMessage = document.getElementById('congratulationsMessage');

    hireMeButton.addEventListener('click', () => {
        hireMeButton.style.display = 'none';
        typeMessage('Congratulations!', congratulationsMessage);
    });

    function typeMessage(message, element) {
        let index = 0;
        element.classList.remove('hidden');
        const interval = setInterval(() => {
            element.textContent += message[index];
            index++;
            if (index === message.length) {
                clearInterval(interval);
            }
        }, 100);
    }
});
