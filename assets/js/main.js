(function () {
    var ACTIVE_COLOR = '#c91c1c';   // same color you were using before
    var DEFAULT_COLOR = '#fff';

    function norm(path) {
        if (!path) return '/';
        // treat /index.html == / and trim trailing slashes (except root)
        path = path.replace(/\/index\.html$/i, '/').replace(/\/+$/, '');
        return path || '/';
    }

    function setActiveNav() {
        var cur = norm(location.pathname);

        var links = document.querySelectorAll('header .desktop-nav a, header .mobile-nav a');
        links.forEach(function (a) {
            // IMPORTANT: use a.href (already resolved with <base>) or document.baseURI
            var linkPath = norm(new URL(a.href || a.getAttribute('href'), document.baseURI).pathname);

            if (linkPath === cur) {
                // keep your original inline styling behavior (strict visual match)
                a.style.color = ACTIVE_COLOR;
                a.style.fontWeight = 'bold';
            } else {
                a.style.color = DEFAULT_COLOR;
                a.style.fontWeight = 'normal';
            }
        });
    }

    function toggleNav() {
        var nav = document.getElementById('main-nav');
        if (!nav) return;
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
    }
    window.toggleNav = toggleNav;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNav);
    } else {
        setActiveNav();
    }
})();
