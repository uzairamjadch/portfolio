document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Dynamic Cards Data & Rendering (DRY Rule using .map) ---------- */

    // 1. Projects Data (for projects.html)
    const projectsData = [
        {
            icon: "🛍️",
            thumbClass: "thumb-1",
            tag: "Private Label Venture",
            title: "Elif Pakistan Storefront",
            description: "Custom Shopify skincare platform with tailored user journeys, direct transactional pipelines, and real-time stock indexes optimized for conversion.",
            delay: 100
        },
        {
            icon: "☕",
            thumbClass: "thumb-2",
            tag: "Desktop System",
            title: "Café Management System",
            description: "Java desktop application handling real-time checkout, compounding pricing, stock control, and formatted receipt output.",
            delay: 200
        },
        {
            icon: "🎯",
            thumbClass: "thumb-3",
            tag: "Growth Funnels",
            title: "E-Commerce Client Growth",
            description: "Meta ad allocation algorithms with target persona sets, retargeting pipelines, and dynamic budget pacing.",
            delay: 300
        },
        {
            icon: "🎨",
            thumbClass: "thumb-4",
            tag: "Brand Assets",
            title: "Canva Strategic Brand Elements",
            description: "Cohesive brand visual modules for ongoing marketing runs — layout grids, typography profiles, and conversion creative.",
            delay: 400
        }
    ];

    // 2. Technical Toolkit / Skills Data (for skills.html)
    const skillsData = [
        {
            icon: "💻",
            iconClass: "ink",
            title: "Backend & Systems",
            description: "Asynchronous application logic, data layers, and modular processing.",
            tags: ["HTML5 & CSS3", "FastAPI", "PostgreSQL"],
            delay: 100
        },
        {
            icon: "🛍️",
            iconClass: "red",
            title: "E-Commerce Operations",
            description: "Standalone storefront logic, private label fulfillment, and CRO testing.",
            tags: ["Shopify Liquid", "Conversion Sprints", "Fulfillment Ops"],
            delay: 200
        },
        {
            icon: "🎯",
            iconClass: "gold",
            title: "Paid Acquisition",
            description: "Campaign structure, tracking, and creative asset management.",
            tags: ["Meta Ads Manager", "Canva Pro", "Git & GitHub"],
            delay: 300
        }
    ];

    // 3. Highlights Data (for index.html)
    const highlightsData = [
        { num: "100%", label: "Mobile-First Responsive Design", delay: 100 },
        { num: "High-CRO", label: "Optimized User Experience", delay: 200 },
        { num: "Scalable", label: "Clean & Modular Architecture", delay: 300 },
        { num: "Growth", label: "Data-Driven Acquisition Strategy", delay: 400 }
    ];

    // 4. Core Pillars Data (for index.html)
    const pillarsData = [
        {
            icon: "⚡",
            iconClass: "red",
            title: "User-Centric Execution",
            description: "Prioritizing swift page load speeds, clean typography, and intuitive touch targets across every screen resolution.",
            delay: 100
        },
        {
            icon: "📈",
            iconClass: "ink",
            title: "Conversion Focus",
            description: "Structuring interfaces and media funnels to guide visitors seamlessly from landing page to finalized checkout.",
            delay: 200
        },
        {
            icon: "🛠️",
            iconClass: "gold",
            title: "Clean Code Standards",
            description: "Writing organized, reusable code structures for smooth deployment, maintenance, and future development scale.",
            delay: 300
        }
    ];

    // 5. Process Data (for index.html)
    const processData = [
        {
            step: "01. Strategy",
            description: "Analyzing project goals, user journeys, and target market audience profile.",
            delay: 100
        },
        {
            step: "02. Design & Code",
            description: "Building interactive wireframes and developing mobile-first UI components.",
            delay: 200
        },
        {
            step: "03. Optimization",
            description: "Testing responsive behaviors, performance speeds, and cross-browser stability.",
            delay: 300
        },
        {
            step: "04. Deployment",
            description: "Publishing live production assets with git version control and launch QA.",
            delay: 400
        }
    ];

    // Render Projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(item => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${item.delay}">
                <div class="project-thumb ${item.thumbClass}">${item.icon}</div>
                <div class="project-body">
                    <span class="tag-label">${item.tag}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Skills
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(item => `
            <div class="skill-card" data-aos="fade-up" data-aos-delay="${item.delay}">
                <div class="skill-icon ${item.iconClass}" aria-hidden="true">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="tag-row">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Render About Highlights
    const highlightsGrid = document.querySelector('.about-highlights');
    if (highlightsGrid) {
        highlightsGrid.innerHTML = highlightsData.map(item => `
            <div class="highlight-card" data-aos="zoom-in" data-aos-delay="${item.delay}">
                <div class="num">${item.num}</div>
                <div class="label">${item.label}</div>
            </div>
        `).join('');
    }

    // Render Core Pillars
    const pillarsGrid = document.querySelector('.pillars-grid');
    if (pillarsGrid) {
        pillarsGrid.innerHTML = pillarsData.map(item => `
            <div class="skill-card" data-aos="fade-up" data-aos-delay="${item.delay}">
                <div class="skill-icon ${item.iconClass}">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Render Process / How I Work
    const processGrid = document.querySelector('.process-grid');
    if (processGrid) {
        processGrid.innerHTML = processData.map(item => `
            <div class="skill-card process-card" data-aos="fade-up" data-aos-delay="${item.delay}">
                <span class="process-step">${item.step}</span>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    /* ---------- AOS Initialization ---------- */
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

    /* ---------- Navbar Scroll Effect ---------- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                navbar.style.background = 'rgba(6, 8, 15, 0.92)';
                navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.15)';
            } else {
                navbar.style.background = 'rgba(6, 8, 15, 0.75)';
                navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
            }
            lastScroll = scrollY;
        }, { passive: true });
    }

    /* ---------- Aurora Mouse Tracking ---------- */
    const auroraBlobs = document.querySelectorAll('.aurora-blob');
    if (auroraBlobs.length > 0) {
        let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
        }, { passive: true });
        
        function animateAurora() {
            currentX += (mouseX - currentX) * 0.02;
            currentY += (mouseY - currentY) * 0.02;
            
            auroraBlobs.forEach((blob, i) => {
                const factor = (i + 1) * 0.5;
                blob.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
            });
            
            requestAnimationFrame(animateAurora);
        }
        animateAurora();
    }
});