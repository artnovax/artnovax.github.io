// Initialize AOS with the exact options used inline on the page
if (window.AOS) {
    AOS.init({ duration: 1000, once: false });
} else {
    window.addEventListener('load', function () {
        if (window.AOS) AOS.init({ duration: 1000, once: false });
    });
}
