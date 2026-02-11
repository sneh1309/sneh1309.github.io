/* ==========================================
   SNEH PATEL — CYBERPUNK PORTFOLIO JS
   ========================================== */

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 2500);
});

// ==================== PARTICLES.JS CONFIG ====================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                },
                color: { value: '#00ff41' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ff41',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.4 } },
                    push: { particles_nb: 3 }
                }
            },
            retina_detect: true
        });
    }

    // ==================== TYPED.JS ====================
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-output', {
            strings: [
                'Penetration Tester',
                'SOC Analyst',
                'Ethical Hacker',
                'Security Researcher',
                'Incident Responder',
                'Digital Forensics Analyst'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '_'
        });
    }

    // ==================== AOS INIT ====================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ==================== CUSTOM CURSOR ====================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Center the 4px dot on cursor
            cursorDot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
        });

        // Smooth reticle follow with slight lag
        function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            const size = cursorRing.classList.contains('hover') ? 22 : 16;
            cursorRing.style.transform = `translate(${ringX - size}px, ${ringY - size}px)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effect on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .btn, .filter-btn, .project-card, .cert-card, .skill-category, .stat-card, .nav-link, .hamburger, input, textarea');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // Click shrink effect
        document.addEventListener('mousedown', () => cursorRing.classList.add('click'));
        document.addEventListener('mouseup', () => cursorRing.classList.remove('click'));
    }

    // ==================== SCROLL PROGRESS BAR ====================
    const scrollProgress = document.getElementById('scroll-progress');

    // ==================== NAVBAR SCROLL ====================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Scroll progress bar
        if (scrollProgress && docHeight > 0) {
            const scrollPercent = (scrollY / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });

        // Animate skill bars on scroll
        animateSkillBars();

        // Animate stat counters on scroll
        animateStatCounters();

        // Reveal text elements on scroll
        revealOnScroll();
    });

    // ==================== BACK TO TOP ====================
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== HAMBURGER MENU ====================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ==================== SKILL BARS ANIMATION ====================
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.setProperty('--target-width', targetWidth + '%');
                bar.classList.add('animated');
            });
            skillsAnimated = true;
        }
    }

    // ==================== STAT COUNTER ANIMATION ====================
    let statsAnimated = false;

    function animateStatCounters() {
        if (statsAnimated) return;
        const statsSection = document.querySelector('.about-stats');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCounter();
            });
            statsAnimated = true;
        }
    }

    // ==================== SCROLL REVEAL TEXT ====================
    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal-text');
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.85) {
                el.classList.add('revealed');
            }
        });
    }

    // ==================== SKILL CARD GLOW TRAIL ====================
    document.querySelectorAll('.skill-category').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // ==================== 3D TILT EFFECT ON CARDS ====================
    const tiltCards = document.querySelectorAll('.project-card, .cert-card, .stat-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // ==================== PROJECT FILTERS ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ==================== CONTACT FORM (FormSubmit) ====================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            data._subject = 'New Portfolio Message: ' + (data.subject || 'No Subject');
            data._captcha = 'false';
            data._template = 'table';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    formStatus.textContent = '> Message sent successfully!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status';
                    }, 5000);
                } else {
                    formStatus.textContent = '> Error sending message. Please try again.';
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                formStatus.textContent = '> Network error. Please try again later.';
                formStatus.className = 'form-status error';
            }

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }

    // ==================== BLOG RSS FEED ====================
    loadBlogFeed();

    // ==================== SMOOTH SCROLL FOR NAV LINKS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // ==================== PARALLAX ON HERO ====================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrollY / window.innerHeight) * 0.8;
            }
        });
    }
});

// ==================== BLOG RSS FEED LOADER ====================
async function loadBlogFeed() {
    const blogFeed = document.getElementById('blog-feed');
    if (!blogFeed) return;

    const RSS_URL = 'https://feeds.feedburner.com/TheHackersNews';
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'ok' && data.items && data.items.length > 0) {
            const articles = data.items.slice(0, 6);
            blogFeed.innerHTML = articles.map(article => {
                const date = new Date(article.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                // Extract image from content or use thumbnail
                let imageUrl = article.thumbnail || article.enclosure?.link || '';
                if (!imageUrl && article.description) {
                    const imgMatch = article.description.match(/<img[^>]+src="([^"]+)"/);
                    if (imgMatch) imageUrl = imgMatch[1];
                }

                // Strip HTML from description
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = article.description || '';
                const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';
                const truncated = cleanDescription.substring(0, 120) + '...';

                return `
                    <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="blog-card">
                        <div class="blog-image">
                            ${imageUrl
                                ? `<img src="${imageUrl}" alt="${article.title}" loading="lazy">`
                                : `<div class="blog-placeholder"><i class="fas fa-newspaper"></i></div>`
                            }
                            <span class="blog-category">Cybersecurity</span>
                        </div>
                        <div class="blog-content">
                            <span class="blog-date"><i class="far fa-calendar-alt"></i> ${date}</span>
                            <h3>${article.title}</h3>
                            <p>${truncated}</p>
                            <span class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                `;
            }).join('');
        } else {
            showBlogFallback(blogFeed);
        }
    } catch (error) {
        showBlogFallback(blogFeed);
    }
}

function showBlogFallback(container) {
    container.innerHTML = `
        <div class="blog-card">
            <div class="blog-image">
                <div class="blog-placeholder"><i class="fas fa-shield-halved"></i></div>
                <span class="blog-category">Security</span>
            </div>
            <div class="blog-content">
                <span class="blog-date"><i class="far fa-calendar-alt"></i> Latest</span>
                <h3>Stay tuned for cybersecurity insights</h3>
                <p>Blog posts and curated security news coming soon. Follow me on LinkedIn for updates.</p>
                <span class="blog-read-more">Coming Soon <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
    `;
}
