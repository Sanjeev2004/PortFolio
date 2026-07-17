/* ============================================================
   SANJEEV KUMAR — PORTFOLIO SCRIPT
   Features: Typing animation, Scroll reveal, Skill bars,
             Active nav, Hamburger menu, Form validation,
             Cursor glow, Back-to-top, Blob parallax
============================================================ */

'use strict';

// ===== YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== CURSOR GLOW + BLOB PARALLAX =====
const cursorGlow = document.getElementById('cursor-glow');
const blobs = document.querySelectorAll('.blob');

document.addEventListener('mousemove', (e) => {
    // Move cursor glow
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top  = e.clientY + 'px';

    // Subtle blob parallax
    const xRatio = e.clientX / window.innerWidth;
    const yRatio = e.clientY / window.innerHeight;

    blobs.forEach((blob, i) => {
        const speed = (i + 1) * 18;
        blob.style.transform = `translate(${(xRatio * speed) - speed / 2}px, ${(yRatio * speed) - speed / 2}px)`;
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const mobileLinks  = document.querySelectorAll('.mobile-link');

function toggleMobileMenu(forceClose = false) {
    const isOpen = mobileMenu.classList.contains('open') || forceClose;
    if (isOpen) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    } else {
        hamburger.classList.add('open');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

hamburger.addEventListener('click', () => toggleMobileMenu());
mobileLinks.forEach(link => link.addEventListener('click', () => toggleMobileMenu(true)));

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMobileMenu(true);
    }
});

// ===== TYPING ANIMATION =====
const typedEl = document.getElementById('typed-text');
const roles = [
    'Software Engineer',
    'AI / ML Engineer',
    'LLM Systems Builder',
    'Full-Stack Developer',
    'Competitive Programmer'
];

let roleIdx   = 0;
let charIdx   = 0;
let deleting  = false;
let typingSpd = 105;

function typeLoop() {
    const current = roles[roleIdx];

    if (deleting) {
        typedEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        typingSpd = 45;
    } else {
        typedEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        typingSpd = 105;
    }

    if (!deleting && charIdx === current.length) {
        deleting  = true;
        typingSpd = 1900; // pause before deleting
    } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
        typingSpd = 380; // pause before next word
    }

    setTimeout(typeLoop, typingSpd);
}

// Start after brief delay
setTimeout(typeLoop, 900);

// ===== SCROLL REVEAL (IntersectionObserver) =====
const revealEls = document.querySelectorAll('.reveal, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.getAttribute('data-width') + '%';
            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === '#' + entry.target.id;
                link.classList.toggle('active', isActive);
                link.setAttribute('aria-current', isActive ? 'page' : 'false');
            });
        }
    });
}, { threshold: 0.45 });

sections.forEach(s => sectionObserver.observe(s));

// ===== BACK TO TOP =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');
const btnText     = document.getElementById('btn-text');
const btnIcon     = document.getElementById('btn-icon');
const formSuccess = document.getElementById('form-success');

function validateField(id, errorId, validator) {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);
    const valid = validator(field.value.trim());
    field.classList.toggle('error', !valid);
    error.classList.toggle('show', !valid);
    return valid;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate
    const nameOk = validateField('name', 'name-error', v => v.length >= 2);
    const emailOk = validateField('email', 'email-error', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const msgOk = validateField('message', 'message-error', v => v.length >= 10);

    if (!nameOk || !emailOk || !msgOk) return;

    // Simulate sending (no backend — open mailto as fallback)
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin';

    setTimeout(() => {
        // Build mailto link with form content
        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim() || 'Portfolio Contact';
        const message = document.getElementById('message').value.trim();

        const body = encodeURIComponent(
            `Hi Sanjeev,\n\nMy name is ${name} (${email}).\n\n${message}`
        );

        window.location.href = `mailto:sanjeevsamsan2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Show success
        formSuccess.classList.add('show');
        contactForm.reset();
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fa-solid fa-paper-plane';

        setTimeout(() => formSuccess.classList.remove('show'), 6000);
    }, 1200);
});

// Clear error on input
['name', 'email', 'message'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        document.getElementById(id).classList.remove('error');
        document.getElementById(id + '-error').classList.remove('show');
    });
});

// ===== SMOOTH SECTION SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== AVATAR FALLBACK =====
const avatarImg = document.getElementById('avatar-img');
if (avatarImg) {
    avatarImg.addEventListener('error', () => {
        // Replace with initials fallback if image fails
        const fallback = document.createElement('div');
        fallback.style.cssText = `
            width: 64%; aspect-ratio: 1;
            border-radius: 50%; position: relative; z-index: 1;
            background: linear-gradient(135deg, #6366f1, #ec4899);
            display: flex; align-items: center; justify-content: center;
            font-family: Outfit, sans-serif; font-size: 4rem;
            font-weight: 800; color: white; letter-spacing: -2px;
            border: 3px solid rgba(99,102,241,0.45);
        `;
        fallback.textContent = 'SK';
        avatarImg.replaceWith(fallback);
    });
}

// ===== CONSOLE EASTER EGG =====
console.log(
    '%c Hey there! 👋 ',
    'background: linear-gradient(135deg, #6366f1, #ec4899); color: white; font-size: 1.2rem; font-weight: bold; padding: 8px 16px; border-radius: 6px;'
);
console.log(
    '%c Sanjeev Kumar — AI/ML Engineer & Software Developer',
    'color: #818cf8; font-size: 0.9rem;'
);
console.log(
    '%c 📧 sanjeevsamsan2004@gmail.com  |  🐙 github.com/Sanjeev2004',
    'color: #94a3b8; font-size: 0.85rem;'
);
