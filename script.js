// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Formulario WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const proyecto = formData.get('proyecto');
    const mensaje = formData.get('mensaje');
    
    const whatsappMsg = `Hola! Soy ${nombre}
    
📧 ${email}
🚀 Proyecto: ${proyecto}
💬 ${mensaje}`;
    
    // Cambia el número por el tuyo
    const whatsappUrl = `https://wa.me/34679426134?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');
    
    this.reset();
    alert('¡Gracias! Te contactaré pronto 😊');
});

// Header efecto scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});