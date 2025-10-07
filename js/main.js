/**
 * Portfolio Website JavaScript
 * Handles navigation, animations, form submission, and interactive features
 */
// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Portfolio initialization started...');
    initializeApp();
    console.log('✅ Portfolio initialization completed successfully!');
});
/**
 * Initialize all app functionality
 */
function initializeApp() {
    try {
        initializeNavigation();
        initializeSmoothScrolling();
        initializeScrollAnimations();
        initializeContactForm();
        initializeBackToTop();
        initializeMobileMenu();
        initializeTypingAnimation();
        initializeSectionObserver();
        initializeExperienceDropdown(); // Added dropdown functionality
        initializeProjectsSection(); // Added projects section functionality
        
        console.log('✅ All components initialized successfully');
    } catch (error) {
        console.error('❌ Error during app initialization:', error);
    }
}
/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}
/**
 * Smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}
/**
 * Initialize scroll animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                const children = entry.target.querySelectorAll('.project-card, .skill-item, .timeline-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('fade-in-up');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('section, .project-card, .skill-item, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
}
/**
 * Contact form handling
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    form.setAttribute('action', 'https://formspree.io/f/xzzgzeje');
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                showFormStatus('success', 'Thank you! Your message has been sent successfully.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('error', 'Sorry, there was an error sending your message. Please try again later.');
        } finally {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}
/**
 * Back to top button functionality
 */
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
/**
 * Mobile menu functionality
 */
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}
/**
 * Typing animation for hero section
 */
function initializeTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    const roles = [
        'AI/ML Engineer.',
        'AI Automation Engineer.',
        'Python developer.',
        'Building Intelligent Systems With Gen AI.',
        'Responsible AI Advocate.'
    ];
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    function typeAnimation() {
        const current = roles[currentRole];
        if (isDeleting) {
            subtitle.textContent = current.substring(0, currentChar - 1);
            currentChar--;
        } else {
            subtitle.textContent = current.substring(0, currentChar + 1);
            currentChar++;
        }
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
            typeSpeed = 500;
        }
        setTimeout(typeAnimation, typeSpeed);
    }
    setTimeout(typeAnimation, 1000);
}
/**
 * Section highlighting in navigation
 */
function initializeSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    };
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    sections.forEach(section => sectionObserver.observe(section));
}
/**
 * Experience section dropdown functionality
 */
function initializeExperienceDropdown() {
    const positionCards = document.querySelectorAll('.position-card');
    console.log(`📁 Found ${positionCards.length} position cards for dropdown functionality`);
    
    if (positionCards.length === 0) {
        console.warn('⚠️ No position cards found');
        return;
    }
    
    positionCards.forEach((card, index) => {
        // Enhanced accessibility attributes
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-expanded', 'false');
        card.setAttribute('aria-label', `Toggle details for position ${index + 1}`);
        
        const details = card.querySelector('.position-details');
        const icon = card.querySelector('.expand-icon');
        
        // Ensure details have proper initial state
        if (details) {
            details.setAttribute('aria-hidden', 'true');
            details.style.maxHeight = '0px';
            details.style.opacity = '0';
        }
        
        const toggleCard = (e) => {
            // Prevent event bubbling
            if (e) {
                e.stopPropagation();
            }
            
            if (!details || !icon) return;
            
            const isExpanded = details.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                details.style.maxHeight = '0px';
                details.style.opacity = '0';
                details.setAttribute('aria-hidden', 'true');
                
                setTimeout(() => {
                    details.classList.remove('expanded');
                }, 50);
                
                icon.classList.remove('expanded');
                card.classList.remove('expanded');
                card.setAttribute('aria-expanded', 'false');
            } else {
                // Expand
                details.classList.add('expanded');
                details.setAttribute('aria-hidden', 'false');
                
                // Calculate full height for smooth animation
                const fullHeight = details.scrollHeight;
                details.style.maxHeight = fullHeight + 'px';
                details.style.opacity = '1';
                
                icon.classList.add('expanded');
                card.classList.add('expanded');
                card.setAttribute('aria-expanded', 'true');
            }
        };
        
        // Enhanced click handler - only trigger on card click, not child elements
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on links or buttons within the card
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            toggleCard(e);
        });
        
        // Enhanced keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(e);
            }
            // ESC key to collapse if expanded
            if (e.key === 'Escape' && details.classList.contains('expanded')) {
                toggleCard(e);
            }
        });
        
        // Handle focus styles
        card.addEventListener('focus', function() {
            card.style.outline = '2px solid hsl(var(--primary-color))';
            card.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            card.style.outline = 'none';
        });
    });
}
/**
 * Projects section functionality - Enhanced implementation
 */
function initializeProjectsSection() {
    // Get all project cards and the projects grid
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectsCta = document.querySelector('.projects-cta');
    
    console.log(`📋 Found ${projectCards.length} project cards`);
    
    // If there are no projects or no more than 6, exit
    if (!projectCards.length || projectCards.length <= 6 || !projectsGrid || !projectsCta) {
        console.log('ℹ️ Projects section: Not enough projects to hide or missing elements');
        return;
    }
    
    console.log(`🔍 Hiding ${projectCards.length - 6} projects initially`);
    
    // Hide project cards beyond the 6th one
    for (let i = 6; i < projectCards.length; i++) {
        projectCards[i].classList.add('hidden-project');
        projectCards[i].style.display = 'none';
        projectCards[i].setAttribute('aria-hidden', 'true');
    }
    
    // Create the "View All Projects" button
    const viewAllBtn = document.createElement('button');
    viewAllBtn.className = 'btn view-all-projects-btn';
    viewAllBtn.innerHTML = '<i class="fas fa-expand"></i> View All Projects';
    viewAllBtn.setAttribute('aria-label', `Show ${projectCards.length - 6} more projects`);
    
    // Add click event to the button
    viewAllBtn.addEventListener('click', function() {
        // Show all hidden projects with staggered animation
        const hiddenProjects = document.querySelectorAll('.hidden-project');
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'flex';
                project.classList.remove('hidden-project');
                project.setAttribute('aria-hidden', 'false');
                project.classList.add('fade-in-project');
            }, index * 150); // Stagger the animation for a smoother effect
        });
        
        // Update button text and hide it after animation
        this.innerHTML = '<i class="fas fa-check"></i> All Projects Shown';
        this.disabled = true;
        
        setTimeout(() => {
            this.style.opacity = '0';
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.display = 'none';
            }, 300);
        }, hiddenProjects.length * 150 + 500);
    });
    
    // Insert the button before the existing CTA content
    const existingBtn = projectsCta.querySelector('.btn');
    if (existingBtn) {
        projectsCta.insertBefore(viewAllBtn, existingBtn);
    } else {
        projectsCta.appendChild(viewAllBtn);
    }
    
    // Add enhanced animations and styles if they don't exist
    if (!document.querySelector('#projectsAnimationStyles')) {
        const style = document.createElement('style');
        style.id = 'projectsAnimationStyles';
        style.textContent = `
            .hidden-project {
                display: none !important;
            }
            
            .fade-in-project {
                animation: fadeInProject 0.6s ease-out forwards;
                opacity: 0;
                transform: translateY(30px);
            }
            
            @keyframes fadeInProject {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .view-all-projects-btn {
                background: linear-gradient(135deg, hsl(220 91% 55%) 0%, hsl(262 52% 47%) 100%);
                margin-right: var(--space-4);
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            }
            
            .view-all-projects-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
            }
            
            .view-all-projects-btn:disabled {
                background: linear-gradient(135deg, hsl(142 71% 45%) 0%, hsl(142 71% 55%) 100%);
                cursor: not-allowed;
            }
            
            @media (max-width: 768px) {
                .view-all-projects-btn {
                    margin-right: 0;
                    margin-bottom: var(--space-4);
                    width: 100%;
                }
                
                .projects-cta {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
/**
 * Utility functions
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function revealElement(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}
// Close mobile menu with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});
// Resize handling
window.addEventListener('resize', debounce(function () {
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));
// Image preload
function preloadImages() {
    const images = [
    ];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
setTimeout(preloadImages, 1000);
// Console log for developers
console.log(`
🚀 Portfolio Website
Built with HTML, CSS, and JavaScript
Feel free to check out the code!
GitHub: https://github.com/lBRAHIM8323
`);