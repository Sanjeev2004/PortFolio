'use strict';

// A mouse-only arrow keeps touch and keyboard navigation native.
const pointer = document.getElementById('custom-cursor');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
function hidePointer() {
    document.documentElement.classList.remove('custom-pointer-active');
}
window.addEventListener('pointermove', event => {
    if (!finePointer.matches || event.pointerType !== 'mouse') {
        hidePointer();
        return;
    }
    pointer.style.transform = `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`;
    document.documentElement.classList.add('custom-pointer-active');
    pointer.classList.toggle('over-link', Boolean(event.target.closest('a, button, summary')));
}, { passive: true });
document.addEventListener('pointerleave', hidePointer);
window.addEventListener('blur', hidePointer);
document.addEventListener('keydown', hidePointer);
finePointer.addEventListener('change', hidePointer);

const progressFill = document.getElementById('scroll-progress-fill');
let scrollFrame = 0;
function updateProgress() {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
    progressFill.style.transform = `scaleX(${progress})`;
    scrollFrame = 0;
}
function queueProgress() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
}
window.addEventListener('scroll', queueProgress, { passive: true });
window.addEventListener('resize', queueProgress);
window.addEventListener('load', queueProgress);
document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', queueProgress));
updateProgress();

const menuButton = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
    mobileMenu.classList.remove('open');
    menuButton.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuButton.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        menuButton.focus();
    }
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-right').forEach(element => revealObserver.observe(element));

// Keep same-page links aligned below the sticky header.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
        closeMenu();
    });
});
