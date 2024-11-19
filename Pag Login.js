document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (!users[usuario] || users[usuario].password !== contrasena) {
            alert('Usuario o contraseña incorrectos.');
            return;
        }

        localStorage.setItem('currentUser', usuario);
        alert('Inicio de sesión exitoso.');
        window.location.href = './Info User.html'; 
    });
});
