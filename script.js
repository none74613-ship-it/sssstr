document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const introScreen = document.getElementById('intro-screen');
    const mainScreen = document.getElementById('main-screen');
    const bgMusic = document.getElementById('bgMusic');
    const particlesContainer = document.getElementById('particles-container');

    openBtn.addEventListener('click', () => {

        // 🔊 MUSIC FIX (IMPORTANT)
        bgMusic.muted = false;
        bgMusic.volume = 1;

        const playPromise = bgMusic.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Music chal raha hai ✅");
            }).catch(error => {
                alert("❌ Music nahi chal raha!\nFile ka naam ya path check karo.");
                console.log(error);
            });
        }

        // Intro hide
        introScreen.style.opacity = '0';
        introScreen.style.transform = 'scale(1.5)';
        
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainScreen.classList.add('show');
            createParticles();
        }, 800);
    });

    function createParticles() {
        const colors = ['#ffd700', '#ff00c8', '#00d4ff', '#ffffff'];
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 8 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `-10px`;

            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = color;
            particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

            const duration = Math.random() * 3 + 2;
            particle.style.animationDuration = `${duration}s`;

            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, duration * 1000);

        }, 100);
    }
});