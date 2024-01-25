const switchInput = document.getElementById('switch');
const container = document.querySelector('.container');

switchInput.addEventListener('change', () => {
    const audio = new Audio('switch-1.mp3');
    audio.play();
    container.classList.toggle('darkTheme')
})