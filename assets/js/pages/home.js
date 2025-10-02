// GSAP animation for the big logotype (exact behavior preserved)
window.addEventListener('DOMContentLoaded', function () {
    if (window.gsap) {
        gsap.fromTo('#animated-logo',
            { opacity: 0, y: -50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 2.5, ease: 'power4.out' }
        );
        gsap.to('#animated-logo', {
            letterSpacing: '2px',
            duration: 1.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1
        });
    }
});

// AOS init (same as before)
if (window.AOS) {
    AOS.init();
} else {
    // If AOS loads after defer, initialize on load to be safe
    window.addEventListener('load', function () {
        if (window.AOS) AOS.init();
    });
}

// Canvas particle background (unchanged logic)
(function () {
    var canvas = document.getElementById('animated-bg');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    function sizeCanvas() {
        canvas.width = window.innerWidth;
        var hero = document.querySelector('.hero');
        canvas.height = hero ? hero.offsetHeight : window.innerHeight * 0.6;
    }
    sizeCanvas();

    var particles = [];
    var colors = ['#c91c1c', '#ff4fb2', '#ffffff', '#4400aa'];

    function createParticles() {
        particles.length = 0;
        for (var i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        }
        requestAnimationFrame(drawParticles);
    }

    createParticles();
    requestAnimationFrame(drawParticles);

    window.addEventListener('resize', function () {
        sizeCanvas();
    });
})();
