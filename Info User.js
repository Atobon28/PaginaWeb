document.addEventListener('DOMContentLoaded', () => {
    const currentUserEmail = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (!currentUserEmail || !users[currentUserEmail]) {
        alert('No hay sesión activa. Redirigiendo al inicio de sesión.');
        window.location.href = './Pag Login.html';
        return;
    }

    const user = users[currentUserEmail];
    const profileCard = document.querySelector('.profile-card');
    profileCard.innerHTML = `
        <h2>Bienvenido, ${user.name} ${user.surname}</h2>
        <p>Correo electrónico: ${user.email}</p>
        <p>Ciudad: ${user.city}</p>
        <p>Dirección: ${user.address}</p>
        <button id="logout">Cerrar sesión</button>
        <h3>Cambiar contraseña</h3>
        <form id="changePasswordForm">
            <input type="password" id="currentPassword" placeholder="Contraseña actual" required>
            <input type="password" id="newPassword" placeholder="Nueva contraseña" required>
            <button type="submit">Cambiar contraseña</button>
        </form>
    `;

    // Cerrar sesión
    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        alert('Sesión cerrada.');
        window.location.href = './Pag Login.html';
    });

    // Cambio de contraseña
    document.getElementById('changePasswordForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;

        if (user.password !== currentPassword) {
            alert('La contraseña actual es incorrecta.');
            return;
        }

        user.password = newPassword;
        users[currentUserEmail] = user;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Contraseña actualizada exitosamente.');
    });

    // Gestión del carrito de compras
    const cartSection = document.createElement('div');
    cartSection.innerHTML = `
        <h3>Carrito de Compras</h3>
        <ul id="cartList"></ul>
        <form id="addCartForm">
            <input type="text" id="newCartItem" placeholder="Agregar producto al carrito" required>
            <button type="submit">Agregar al carrito</button>
        </form>
    `;
    document.body.appendChild(cartSection);

    const cartList = document.getElementById('cartList');
    const addCartForm = document.getElementById('addCartForm');

    // Mostrar carrito
    function renderCart() {
        cartList.innerHTML = user.cart.map(item => `
            <li>${item} <button data-item="${item}" class="removeCartItem">Eliminar</button></li>
        `).join('');
    }

    renderCart();

    // Agregar al carrito
    addCartForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newCartItem = document.getElementById('newCartItem').value;
        if (!user.cart.includes(newCartItem)) {
            user.cart.push(newCartItem);
            users[currentUserEmail] = user;
            localStorage.setItem('users', JSON.stringify(users));
            renderCart();
        }
        document.getElementById('newCartItem').value = '';
    });

    // Eliminar del carrito
    cartList.addEventListener('click', (event) => {
        if (event.target.classList.contains('removeCartItem')) {
            const item = event.target.dataset.item;
            user.cart = user.cart.filter(product => product !== item);
            users[currentUserEmail] = user;
            localStorage.setItem('users', JSON.stringify(users));
            renderCart();
        }
    });
});
