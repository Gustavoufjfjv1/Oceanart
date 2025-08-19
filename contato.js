document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form-container form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});