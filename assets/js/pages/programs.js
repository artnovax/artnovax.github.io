// AOS exactly as used inline on this page
if (window.AOS) {
    AOS.init({ duration: 1000, once: false, mirror: true });
} else {
    window.addEventListener('load', function () {
        if (window.AOS) AOS.init({ duration: 1000, once: false, mirror: true });
    });
}
