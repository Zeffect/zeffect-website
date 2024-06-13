document.addEventListener('DOMContentLoaded', () => {
    const dotsElement = document.querySelector('.dots');
    let dotCount = 0;
    const maxDots = 3;
    const interval = 700;

    function animateDots() {
        if (dotCount < maxDots) {
            dotCount++;
            const dot = document.createElement('span');
            dot.textContent = '.';
            dot.style.opacity = 0;
            dot.style.transition = 'opacity 0.5s, transform 0.5s';
            dot.style.transform = 'translateY(10px)';
            dotsElement.appendChild(dot);

            void dot.offsetWidth;

            dot.style.opacity = 1;
            dot.style.transform = 'translateY(0)';

        } else {
            const dots = dotsElement.querySelectorAll('span');
            dots.forEach(dot => {
                dot.style.opacity = 0;
                dot.style.transform = 'translateY(10px)';
            });
            dotCount = 0;
            
            setTimeout(() => {
                dots.forEach(dot => dot.remove());
            }, 700);
        }
    }

    setInterval(animateDots, interval);
});
