document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('editForm');
    const editValueInput = document.getElementById('editValue');
    const closeModal = document.getElementById('closeModal');
    const updateForm = document.getElementById('updateForm');
    let currentItem; // Variable para rastrear el elemento actual en edición

    // Abrir el formulario de edición al hacer clic en "EDITAR"
    document.querySelectorAll('.profile-item button').forEach(button => {
        button.addEventListener('click', (event) => {
            currentItem = event.target.previousElementSibling;
            editValueInput.value = currentItem.innerText; // Prellenar el campo con el valor actual
            editForm.style.display = 'flex';
        });
    });

    // Cerrar el formulario de edición
    closeModal.addEventListener('click', () => {
        editForm.style.display = 'none';
    });

    // Guardar el valor actualizado
    updateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newValue = editValueInput.value.trim();
        if (newValue) {
            currentItem.innerText = newValue; // Actualizar el valor en la interfaz de usuario
            editForm.style.display = 'none'; // Cerrar el formulario emergente
        } else {
            alert('El campo no puede estar vacío');
        }
    });

    // Cerrar el formulario emergente al hacer clic fuera del mismo
    window.addEventListener('click', (event) => {
        if (event.target === editForm) {
            editForm.style.display = 'none';
        }
    });
});
