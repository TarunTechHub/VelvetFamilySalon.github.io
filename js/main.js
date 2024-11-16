// Script for Navbar Toggler (Mobile View)
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});

// Script for Smooth Scrolling (Links in the Navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script for Image Carousel (using Bootstrap's Carousel)
$('#carouselExampleControls').carousel({
    interval: 3000 // Time in milliseconds for slide change
});

// Contact Form Validation (Basic)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === "" || email === "" || message === "") {
            e.preventDefault();
            alert("Please fill in all fields before submitting the form.");
        } else {
            // If form is valid, you can perform an action here (e.g., sending data)
            alert("Thank you for your message!");
        }
    });
}

// Scroll Animation for Service Boxes (Optional Effect for Scroll)
const serviceBoxes = document.querySelectorAll('.service-box');
const serviceBoxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
        }
    });
}, { threshold: 0.3 });

serviceBoxes.forEach(box => {
    serviceBoxObserver.observe(box);
});

// Scroll Animation for About Section (Optional Effect for Scroll)
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    }, { threshold: 0.3 });

    aboutObserver.observe(aboutSection);
}

// Scroll Animation for Lookbook Section
const lookbookSection = document.querySelector('#lookbook');
if (lookbookSection) {
    const lookbookObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
            }
        });
    }, { threshold: 0.3 });

    lookbookObserver.observe(lookbookSection);
}