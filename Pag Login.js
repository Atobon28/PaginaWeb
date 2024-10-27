// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        // Validar que los campos no estén vacíos
        if (usuario.trim() === '' || contrasena.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Si los campos son válidos, mostrar el mensaje y redirigir
        messageDiv.textContent = 'Registro exitoso. Redirigiendo...';
        
        // Redirigir después de 2 segundos
        setTimeout(() => {
            window.location.href = 'Main Page.html';
        }, 2000); // 2000 ms = 2 segundos
    });
});
