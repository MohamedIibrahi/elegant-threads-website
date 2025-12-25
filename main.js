// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Gallery slider with auto-play
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => nextSlide());

// Auto-play every 4 seconds
setInterval(nextSlide, 4000);

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const messageEl = document.getElementById('formMessage');

    if (!name || !email || !message) {
        messageEl.textContent = 'Please fill in all fields.';
        messageEl.style.color = '#FF6B6B';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        messageEl.textContent = 'Please enter a valid email.';
        messageEl.style.color = '#FF6B6B';
    } else {
        messageEl.textContent = 'Message sent successfully!';
        messageEl.style.color = '#001F3F';
        this.reset();
    }
});