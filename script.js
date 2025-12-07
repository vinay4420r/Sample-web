// MOBILE MENU TOGGLE
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('mobile');
    navLinks.classList.toggle('active');
});

// CLOSE MENU WHEN LINK IS CLICKED
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        navLinks.classList.remove('mobile');
    });
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// SCROLL ANIMATION OBSERVER
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});

// WHATSAPP BUTTON
const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/919876543210', '_blank');
});

// ADD SHADOW TO NAVBAR ON SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// BUTTON CLICK HANDLERS
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta-primary, .btn-cta-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// NAVBAR LOGO CLICK TO HOME
document.querySelector('.navbar-logo').addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

console.log('Hand Research Academy Website Loaded Successfully');
