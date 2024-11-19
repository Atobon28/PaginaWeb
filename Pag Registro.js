document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;

        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[email]) {
            alert('El usuario ya está registrado.');
            return;
        }

        users[email] = {
            name,
            surname,
            email,
            password,
            city,
            address,
            carrito: [] 
        };

        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso');
        window.location.href = './Pag Login.html'; 
    });
});
