/* ===============================
   MOHAMMAD IBRAHIM - PORTFOLIO WEBSITE
   Interactive JavaScript Functions
   =============================== */

// ===============================
// DARK MODE TOGGLE
// ===============================

/**
 * Dark mode toggle functionality
 * Saves user preference in localStorage
 */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ===============================
// BACKGROUND ANIMATIONS
// ===============================

/**
 * Create animated background particles
 * Adds floating particles for visual appeal
 */
function createBackgroundAnimation() {
    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'bg-animation';
    document.body.appendChild(bgAnimation);
    
    // Create 15 particles with random sizes and positions
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 10px and 100px
        const size = Math.random() * 90 + 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        
        bgAnimation.appendChild(particle);
    }
}

// Initialize background animation when page loads
window.addEventListener('load', createBackgroundAnimation);

// ===============================
// PROJECTS SHOW MORE/LESS
// ===============================

/**
 * Show/hide projects beyond the first 6
 */
const projectCards = document.querySelectorAll('.project-card');
const toggleProjectsBtn = document.getElementById('toggleProjects');
const projectsButtonText = document.getElementById('projectsButtonText');
const projectsButtonIcon = document.getElementById('projectsButtonIcon');

let projectsExpanded = false;

// Initially hide projects after index 5 (show first 6)
projectCards.forEach((card, index) => {
    if (index > 5) {
        card.classList.add('hidden');
    }
});

// Toggle projects visibility
toggleProjectsBtn.addEventListener('click', () => {
    projectsExpanded = !projectsExpanded;
    
    projectCards.forEach((card, index) => {
        if (index > 5) {
            card.classList.toggle('hidden');
        }
    });
    
    if (projectsExpanded) {
        projectsButtonText.textContent = 'Show Less Projects';
        toggleProjectsBtn.classList.add('rotated');
    } else {
        projectsButtonText.textContent = 'Show More Projects';
        toggleProjectsBtn.classList.remove('rotated');
    }
});

// ===============================
// CERTIFICATIONS SHOW MORE/LESS
// ===============================

/**
 * Show/hide certifications beyond the first 6
 */
const certCards = document.querySelectorAll('.cert-card');
const toggleCertificationsBtn = document.getElementById('toggleCertifications');
const certificationsButtonText = document.getElementById('certificationsButtonText');
const certificationsButtonIcon = document.getElementById('certificationsButtonIcon');

let certificationsExpanded = false;

// Check if there are more than 6 certifications
if (certCards.length > 6) {
    // Initially hide certifications after index 5 (show first 6)
    certCards.forEach((card, index) => {
        if (index > 5) {
            card.classList.add('hidden');
        }
    });
    
    // Toggle certifications visibility
    toggleCertificationsBtn.addEventListener('click', () => {
        certificationsExpanded = !certificationsExpanded;
        
        certCards.forEach((card, index) => {
            if (index > 5) {
                card.classList.toggle('hidden');
            }
        });
        
        if (certificationsExpanded) {
            certificationsButtonText.textContent = 'Show Less Certifications';
            toggleCertificationsBtn.classList.add('rotated');
        } else {
            certificationsButtonText.textContent = 'Show More Certifications';
            toggleCertificationsBtn.classList.remove('rotated');
        }
    });
} else {
    // Hide the button if there are 6 or fewer certifications
    toggleCertificationsBtn.style.display = 'none';
}

// ===============================
// NAVIGATION BAR FUNCTIONALITY
// ===============================

/**
 * Add scrolled class to navbar when user scrolls down
 * This creates the blur/transparency effect on scroll
 */
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/**
 * Mobile hamburger menu toggle
 * Opens and closes the mobile navigation menu
 */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X shape when active
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Experience dropdown
function toggleExpand(btn) {
    const content = btn.closest('.timeline-content');
    const description = content.querySelector('.timeline-description');
    description.classList.toggle('expanded');
    btn.textContent = description.classList.contains('expanded') ? 'Read less ▲' : 'Read more ▼';
}

/**
 * Close mobile menu when a navigation link is clicked
 * This provides better user experience on mobile devices
 */
const allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===============================
// SMOOTH SCROLLING
// ===============================

/**
 * Smooth scroll to sections when clicking navigation links
 * Note: This is a fallback for browsers that don't support CSS scroll-behavior
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// SCROLL ANIMATIONS
// ===============================

/**
 * Intersection Observer for fade-in animations
 * Elements fade in when they come into view while scrolling
 */
const observerOptions = {
    threshold: 0.1,      // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters view
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to these elements
const animatedElements = document.querySelectorAll(
    '.service-card, .timeline-item, .project-card, .cert-card, .skill-category'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===============================
// CONTACT FORM HANDLING
// ===============================

/**
 * Handle contact form submission with Formspree
 * Shows success or error messages to the user
 */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Send form data to Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success - show success message
            formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            // Error from server
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Show error message
        formStatus.textContent = 'Oops! There was a problem sending your message. Please try again or email me directly.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    } finally {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

/**
 * Highlight the active navigation link based on scroll position
 * This helps users know which section they are currently viewing
 */
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Account for navbar
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', setActiveNavLink);

// ===============================
// TYPING EFFECT (Optional Enhancement)
// ===============================

/**
 * Optional: Add a typing effect to the hero subtitle
 * Uncomment the code below if you want this feature
 */

/*
const subtitle = document.querySelector('.hero-subtitle');
const originalText = subtitle.textContent;
subtitle.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < originalText.length) {
        subtitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust speed here (milliseconds per character)
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);
*/

// ===============================
// LOADING ANIMATION
// ===============================

/**
 * Hide page loader when everything is loaded
 * Note: You need to add a loader element to HTML if you want this feature
 */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ===============================
// SCROLL TO TOP BUTTON (Optional)
// ===============================

/**
 * Optional: Add a "Scroll to Top" button
 * Uncomment the code below and add the button to your HTML
 */

/*
// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
`;
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when clicked
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
*/

// ===============================
// CONSOLE MESSAGE
// ===============================

/**
 * Fun console message for developers who inspect the site
 */
console.log('%c👋 Hello Developer!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to reach out!', 'color: #6b7280; font-size: 14px;');
console.log('%c💼 Let\'s build something amazing together!', 'color: #10b981; font-size: 14px;');

/* ===============================
   CUSTOMIZATION GUIDE FOR BEGINNERS
   ===============================
   
   HOW TO MODIFY THIS FILE:
   
   1. CHANGE ANIMATION SPEED:
      - Find "setTimeout" values and adjust milliseconds (1000 = 1 second)
      - Find "transition" values in style changes
   
   2. ENABLE OPTIONAL FEATURES:
      - Scroll to top button: Uncomment the "SCROLL TO TOP" section
      - Typing effect: Uncomment the "TYPING EFFECT" section
   
   3. MODIFY SCROLL BEHAVIOR:
      - Change "offsetTop - 80" to adjust scroll position offset
      - Modify "threshold: 0.1" in observerOptions to change when animations trigger
   
   4. CUSTOMIZE FORM MESSAGES:
      - Edit the text in formStatus.textContent for success/error messages
      - Change setTimeout duration to show messages longer/shorter
   
   5. ADD MORE ANIMATIONS:
      - Add more selectors to animatedElements
      - Create new IntersectionObserver instances for different effects
   
   HELPFUL RESOURCES:
   - JavaScript basics: https://developer.mozilla.org/en-US/docs/Web/JavaScript
   - DOM manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
   - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   
   =============================== */
