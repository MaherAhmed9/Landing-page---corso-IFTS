document.querySelector('.cta-button').addEventListener('click', function() {
            document.querySelector('.registration-form').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        });

        // FAQ Interactive Expandable (Simple highlight on click)
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.backgroundColor = 'var(--color-mint-light)';
                this.style.borderColor = 'var(--color-emerald-primary)';
                
                // Reset others
                document.querySelectorAll('.faq-item').forEach(other => {
                    if (other !== this) {
                        other.style.backgroundColor = 'var(--color-white)';
                        other.style.borderColor = 'var(--color-gray-light)';
                    }
                });
            });
        });

        // Form validation and feedback
        document.querySelector('.registration-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('.submit-button');
            const originalText = button.textContent;
            
            button.textContent = '✓ Iscrizione Confermata!';
            button.style.backgroundColor = 'var(--color-emerald-light)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
                this.reset();
            }, 3000);
        });

        // Animate timeline items on scroll
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });

        // Card hover effect enhancement
        document.querySelectorAll('.reason-card, .testimonial-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });