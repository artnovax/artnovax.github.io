// AOS init (same as original page)
if (window.AOS) {
    AOS.init();
} else {
    window.addEventListener('load', function () {
        if (window.AOS) AOS.init();
    });
}
