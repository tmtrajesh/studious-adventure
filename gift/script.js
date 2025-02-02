document.getElementById('surpriseBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.innerHTML = "I Love You So Much! 💕";
    message.style.transition = "transform 1s ease-in-out";
    message.style.transform = "scale(1.5)";
});
