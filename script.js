document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== "undefined") {
        AOS.init({
            offset: 80,
            duration: 700,
            easing: 'ease-out-quint',
            once: true,
            disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
    }

    /* ---------- Typewriter Roles ---------- */
    const roles = [
        "Shopify Developer",
        "Paid Acquisition Strategist",
        "Web Application Engineer",
        "Brand & Creative Designer"
    ];
    const typeEl = document.getElementById('typewriter');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeEl) {
        if (reduceMotion) {
            typeEl.textContent = roles[0];
        } else {
            let roleIndex = 0, charIndex = 0, deleting = false;
            const TYPE_SPEED = 55, DELETE_SPEED = 30, HOLD = 1400;

            function tick() {
                const current = roles[roleIndex];
                if (!deleting) {
                    charIndex++;
                    typeEl.textContent = current.slice(0, charIndex);
                    if (charIndex === current.length) {
                        deleting = true;
                        setTimeout(tick, HOLD);
                        return;
                    }
                    setTimeout(tick, TYPE_SPEED);
                } else {
                    charIndex--;
                    typeEl.textContent = current.slice(0, charIndex);
                    if (charIndex === 0) {
                        deleting = false;
                        roleIndex = (roleIndex + 1) % roles.length;
                    }
                    setTimeout(tick, DELETE_SPEED);
                }
            }
            tick();
        }
    }

    /* ---------- Video Background Setup ---------- */
    const introVideo = document.getElementById('intro-video');

    if (introVideo) {
        introVideo.loop = false; // Plays once

        // Attempt playback with sound on open
        introVideo.muted = false;
        const playPromise = introVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // If browser blocks unmuted playback, play visually muted immediately
                introVideo.muted = true;
                introVideo.play().catch(() => {});

                // Enable audio seamlessly on the user's first tap/click anywhere
                const enableAudio = () => {
                    introVideo.muted = false;
                    introVideo.play().catch(() => {});
                    window.removeEventListener('pointerdown', enableAudio);
                    window.removeEventListener('touchstart', enableAudio);
                    window.removeEventListener('keydown', enableAudio);
                };

                window.addEventListener('pointerdown', enableAudio, { once: true });
                window.addEventListener('touchstart', enableAudio, { once: true });
                window.addEventListener('keydown', enableAudio, { once: true });
            });
        }
    }

    /* ---------- Mobile Navigation ---------- */
    const navLinksPanel = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');

    let navBackdrop = document.querySelector('.nav-backdrop');
    if (!navBackdrop) {
        navBackdrop = document.createElement('div');
        navBackdrop.className = 'nav-backdrop';
        document.body.appendChild(navBackdrop);
    }

    function openMenu() {
        navLinksPanel?.classList.add('active');
        navBackdrop.classList.add('active');
        menuToggle?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenuFn() {
        navLinksPanel?.classList.remove('active');
        navBackdrop.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    window.toggleMenu = function () {
        if (navLinksPanel?.classList.contains('active')) closeMenuFn();
        else openMenu();
    };

    menuClose?.addEventListener('click', closeMenuFn);
    navBackdrop.addEventListener('click', closeMenuFn);
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenuFn);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenuFn();
    });
});