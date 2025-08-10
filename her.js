// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initAnimations();
    initInteractiveEffects();
    initSpecialFeatures();
});

// Animation initialization
function initAnimations() {
    // Staggered text animation
    animateText();
    
    // Floating hearts generation
    generateFloatingHearts();
    
    // Aurora effect timing
    animateAurora();
    
    // Background stars twinkle
    animateStars();
}

// Interactive effects
function initInteractiveEffects() {
    // Mouse move parallax effect
    initParallax();
    
    // Heart beat on hover
    initHeartEffects();
    
    // Button hover effects
    initButtonEffects();
}

// Special features
function initSpecialFeatures() {
    // Keyboard shortcuts
    initKeyboardShortcuts();
    
    // Easter egg
    initEasterEgg();
}

// Text animation
function animateText() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = 'letterBounce 0.6s ease-out forwards';
        }, index * 100);
    });
}

// Generate additional floating hearts
function generateFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    
    // Create more hearts dynamically
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(heart);
    }
}

// Aurora animation
function animateAurora() {
    const auroraLayers = document.querySelectorAll('.aurora-layer');
    auroraLayers.forEach((layer, index) => {
        layer.style.animationDelay = (index * 2) + 's';
    });
}

// Stars twinkle
function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.animationDuration = (Math.random() * 3 + 1) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
    });
}

// Parallax effect on mouse move
function initParallax() {
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move aurora layers
        const auroraLayers = document.querySelectorAll('.aurora-layer');
        auroraLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Move stars slightly
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            const speed = (index % 3 + 1) * 0.1;
            const x = (mouseX - 0.5) * speed * 10;
            const y = (mouseY - 0.5) * speed * 10;
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Heart effects
function initHeartEffects() {
    const heartContainer = document.querySelector('.heart-container');
    
    heartContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    heartContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Button effects
function initButtonEffects() {
    const button = document.querySelector('.forgive-btn');
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Press 'S' for special message
        if (e.key.toLowerCase() === 's') {
            showSpecialMessage();
        }
        
        // Press 'R' to replay animations
        if (e.key.toLowerCase() === 'r') {
            replayAnimations();
        }
        
        // Press 'H' for heart burst
        if (e.key.toLowerCase() === 'h') {
            createHeartBurst();
        }
    });
}

// Easter egg
function initEasterEgg() {
    let clickCount = 0;
    const heartContainer = document.querySelector('.heart-container');
    
    heartContainer.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 5) {
            createHeartRain();
            clickCount = 0;
        }
    });
}

// Show special message
function showSpecialMessage() {
    const overlay = document.getElementById('specialOverlay');
    overlay.style.display = 'flex';
    
    // Trigger fireworks
    triggerFireworks();
    
    // Add confetti
    createConfetti();
}

// Close special message
function closeSpecialMessage() {
    const overlay = document.getElementById('specialOverlay');
    overlay.style.display = 'none';
}

// Envelope functions
function openEnvelope(envelopeNumber) {
    const envelope = document.querySelectorAll('.envelope')[envelopeNumber - 1];
    const photoPopup = document.getElementById(`photo${envelopeNumber}`);
    
    // Add open class to envelope
    envelope.classList.add('open');
    
    // Show photo popup
    photoPopup.style.display = 'flex';
    
    // Add envelope animation
    setTimeout(() => {
        envelope.classList.remove('open');
    }, 1000);
}

function closeEnvelope(envelopeNumber) {
    const photoPopup = document.getElementById(`photo${envelopeNumber}`);
    photoPopup.style.display = 'none';
}

// Add envelope hover effects
document.addEventListener('DOMContentLoaded', function() {
    const envelopes = document.querySelectorAll('.envelope');
    
    envelopes.forEach((envelope, index) => {
        envelope.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        envelope.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Replay all animations
function replayAnimations() {
    // Reset text animation
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.style.animation = 'none';
        letter.offsetHeight; // Trigger reflow
        letter.style.animation = null;
    });
    
    // Re-trigger animations
    setTimeout(() => {
        animateText();
    }, 100);
    
    // Reset floating hearts
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach(heart => {
        heart.style.animation = 'none';
        heart.offsetHeight;
        heart.style.animation = null;
    });
}

// Create heart burst
function createHeartBurst() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💝';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = '2rem';
        heart.style.animation = 'heartBurst 2s ease-out forwards';
        heart.style.pointerEvents = 'none';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// Create heart rain
function createHeartRain() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = '1.5rem';
            heart.style.animation = 'heartRain 3s linear forwards';
            heart.style.pointerEvents = 'none';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Trigger fireworks
function triggerFireworks() {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach((firework, index) => {
        setTimeout(() => {
            firework.style.animation = 'firework 1s ease-out forwards';
        }, index * 300);
    });
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#a8e6cf', '#ff9a9e'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = 'confettiFall 3s linear forwards';
            confetti.style.pointerEvents = 'none';
            document.querySelector('.special-content').appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes heartBurst {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartRain {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when page loads
window.addEventListener('load', function() {
    // Add a small delay to ensure everything is loaded
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 500);
});
