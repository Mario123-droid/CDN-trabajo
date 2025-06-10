// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.image-slider');
    const topBar = document.querySelector('.top-bar');

    if (slider && topBar) {
        // Pausar la animación al pasar el ratón
        topBar.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });

        // Reanudar la animación al quitar el ratón
        topBar.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    }
});