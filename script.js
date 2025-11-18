/* ========================================
   APIZEN - INTERACTIONS JAVASCRIPT
   Script pour animations et fonctionnalités
   ======================================== */

// ========== VARIABLES GLOBALES ==========
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');

// ========== TYPING EFFECT HERO ==========
const typingText = document.getElementById('typing-text');
const phrases = [
    "APIzen - Vos idées, notre API",
    "Je transforme vos concepts en API performantes",
    "Des solutions API élégantes et robustes",
    "Votre partenaire développement API"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Suppression de caractères
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Ajout de caractères
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    // Vérifier si la phrase est complète
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause avant de supprimer
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Passer à la phrase suivante
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Démarrer l'effet de typing au chargement
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ========== HEADER SCROLL EFFECT ==========
function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// ========== MENU MOBILE ==========
// Ouvrir le menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.classList.add('active');
    });
}

// Fermer le menu avec le bouton X
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    });
}

// Fermer le menu en cliquant sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    });
});

// Fermer le menu en cliquant en dehors
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    }
});

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ========== SCROLL REVEAL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionnel : arrêter d'observer après l'animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments avec data-animation
const animatedElements = document.querySelectorAll('[data-animation]');
animatedElements.forEach(el => observer.observe(el));

// ========== SCROLL TO TOP BUTTON ==========
function toggleScrollTop() {
    if (window.scrollY >= 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', toggleScrollTop);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ne pas empêcher le comportement par défaut pour les liens vides
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== FORMULAIRE DE CONTACT ==========
if (contactForm) {
    const formInputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        company: document.getElementById('company'),
        message: document.getElementById('message')
    };
    
    const formErrors = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        message: document.getElementById('message-error')
    };
    
    const formMessage = document.getElementById('form-message');
    
    // Validation en temps réel
    function validateField(field, errorElement, validationFn, errorMsg) {
        field.addEventListener('blur', () => {
            if (!validationFn(field.value)) {
                field.style.borderColor = '#ef4444';
                errorElement.textContent = errorMsg;
            } else {
                field.style.borderColor = '#4CAF88';
                errorElement.textContent = '';
            }
        });
        
        field.addEventListener('input', () => {
            if (field.style.borderColor === 'rgb(239, 68, 68)') {
                if (validationFn(field.value)) {
                    field.style.borderColor = '#4CAF88';
                    errorElement.textContent = '';
                }
            }
        });
    }
    
    // Règles de validation
    const isValidName = (name) => name.trim().length >= 2;
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMessage = (message) => message.trim().length >= 10;
    
    // Appliquer les validations
    validateField(
        formInputs.name,
        formErrors.name,
        isValidName,
        'Le nom doit contenir au moins 2 caractères'
    );
    
    validateField(
        formInputs.email,
        formErrors.email,
        isValidEmail,
        'Veuillez entrer une adresse email valide'
    );
    
    validateField(
        formInputs.message,
        formErrors.message,
        isValidMessage,
        'Le message doit contenir au moins 10 caractères'
    );
    
    // Soumission du formulaire
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Vérifier toutes les validations
        const isNameValid = isValidName(formInputs.name.value);
        const isEmailValid = isValidEmail(formInputs.email.value);
        const isMessageValid = isValidMessage(formInputs.message.value);
        
        // Afficher les erreurs si nécessaire
        if (!isNameValid) {
            formInputs.name.style.borderColor = '#ef4444';
            formErrors.name.textContent = 'Le nom doit contenir au moins 2 caractères';
        }
        
        if (!isEmailValid) {
            formInputs.email.style.borderColor = '#ef4444';
            formErrors.email.textContent = 'Veuillez entrer une adresse email valide';
        }
        
        if (!isMessageValid) {
            formInputs.message.style.borderColor = '#ef4444';
            formErrors.message.textContent = 'Le message doit contenir au moins 10 caractères';
        }
        
        // Si tout est valide, envoyer le formulaire
        if (isNameValid && isEmailValid && isMessageValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn__text');
            const btnLoader = submitBtn.querySelector('.btn__loader');
            
            // Afficher le loader
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-flex';
            submitBtn.disabled = true;
            
            // Simuler l'envoi (à remplacer par votre logique d'envoi réelle)
            try {
                // Remplacer cette simulation par votre appel API
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Récupérer les données du formulaire
                const formData = {
                    name: formInputs.name.value,
                    email: formInputs.email.value,
                    company: formInputs.company.value,
                    message: formInputs.message.value
                };
                
                console.log('Données du formulaire:', formData);
                
                // Afficher le message de succès
                formMessage.textContent = 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.';
                formMessage.className = 'form__message success';
                
                // Réinitialiser le formulaire
                contactForm.reset();
                Object.values(formInputs).forEach(input => {
                    input.style.borderColor = '';
                });
                
                // Cacher le message après 5 secondes
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
                
            } catch (error) {
                // Afficher le message d'erreur
                formMessage.textContent = 'Oops ! Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.';
                formMessage.className = 'form__message error';
                
                console.error('Erreur lors de l\'envoi:', error);
            } finally {
                // Restaurer le bouton
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        }
    });
}

// ========== CARD HOVER EFFECTS ==========
// Effet magnétique sur les cartes
const cards = document.querySelectorAll('.competence__card, .philosophie__card, .timeline__content, .parcours__content');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ========== PARALLAX EFFECT (optionnel) ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero__content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== PRELOADER (optionnel) ==========
window.addEventListener('load', () => {
    // Ajouter une classe au body pour indiquer que tout est chargé
    document.body.classList.add('loaded');
    
    // Animer l'apparition du hero
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========== EASTER EGG - KONAMI CODE (optionnel) ==========
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Activer un easter egg
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        // Créer l'animation rainbow si elle n'existe pas
        if (!document.querySelector('#rainbow-animation')) {
            const style = document.createElement('style');
            style.id = 'rainbow-animation';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Afficher un message
        const message = document.createElement('div');
        message.textContent = 'Mode Zen Active !';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #0F4C81, #4CAF88);
            color: white;
            padding: 2rem 3rem;
            border-radius: 1rem;
            font-size: 2rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: bounce 0.5s ease-out;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            document.body.style.animation = '';
        }, 3000);
        
        konamiCode = [];
    }
});

// ========== ANALYTICS & PERFORMANCE ==========
// Mesurer le temps de chargement
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page chargee en ${Math.round(loadTime)}ms`);
    
    // Envoyer à votre service d'analytics si configuré
    // analytics.track('page_load', { loadTime });
});

// Tracker les clics sur les CTA
document.querySelectorAll('.btn, .nav__cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`Clic sur le bouton: ${buttonText}`);
        
        // Envoyer à votre service d'analytics
        // analytics.track('button_click', { button: buttonText });
    });
});

// ========== ACCESSIBILITÉ ==========
// Gérer la navigation au clavier dans le menu mobile
if (navMenu) {
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('active');
            navToggle.focus();
        }
    });
}

// Piège de focus dans le menu mobile
if (navToggle) {
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navToggle.click();
        }
    });
}

// ========== UTILITAIRES ==========
// Fonction de debounce pour optimiser les événements scroll
function debounce(func, wait = 10) {
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

// Appliquer le debounce aux événements scroll intensifs
const debouncedScrollActive = debounce(scrollActive, 10);
const debouncedToggleScrollTop = debounce(toggleScrollTop, 10);

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', toggleScrollTop);
window.addEventListener('scroll', debouncedScrollActive);
window.addEventListener('scroll', debouncedToggleScrollTop);

// ========== CONSOLE MESSAGES ==========
console.log('%cAPIzen Portfolio', 'color: #0F4C81; font-size: 24px; font-weight: bold;');
console.log('%cDeveloppe avec passion par Fahmi', 'color: #4CAF88; font-size: 14px;');
console.log('%cBesoin d\'une API ? Contactez-moi !', 'color: #64748b; font-size: 12px;');
console.log('%cTip: Essayez le Konami Code (↑↑↓↓←→←→BA)', 'color: #f59e0b; font-size: 10px; font-style: italic;');

// ========== SERVICE WORKER (PWA - optionnel) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Décommenter pour activer le Service Worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('Service Worker enregistre'))
        //     .catch(error => console.log('Erreur Service Worker:', error));
    });
}
