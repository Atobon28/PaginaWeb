document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('editForm');
    const editValueInput = document.getElementById('editValue');
    const closeModal = document.getElementById('closeModal');
    const updateForm = document.getElementById('updateForm');
    let currentItem; 

    
    document.querySelectorAll('.profile-item button').forEach(button => {
        button.addEventListener('click', (event) => {
            currentItem = event.target.previousElementSibling;
            editValueInput.value = currentItem.innerText; 
            editForm.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        editForm.style.display = 'none';
    });

 
    updateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newValue = editValueInput.value.trim();
        if (newValue) {
            currentItem.innerText = newValue; 
            editForm.style.display = 'none'; 
        } else {
            alert('El campo no puede estar vacío');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === editForm) {
            editForm.style.display = 'none';
        }
    });
});
