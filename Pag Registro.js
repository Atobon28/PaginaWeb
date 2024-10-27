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

        if (name && surname && email && password && city && address) {


            alert('Registro exitoso');
            window.location.href = './Main Page.html';
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
});