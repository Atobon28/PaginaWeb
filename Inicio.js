window.addEventListener('load', () => {
    const carruseles = document.querySelectorAll('.CarruselNP-container');

    carruseles.forEach(container => {
        const carrusel = container.querySelector('.CarruselNP');

        // Clonamos el contenido del carrusel para lograr el bucle infinito
        let clone = carrusel.cloneNode(true);
        container.appendChild(clone);

        // Ajustamos el ancho del contenedor basado en el número de imágenes
        const totalImages = carrusel.children.length;
        container.querySelectorAll('.CarruselNP').forEach(c => {
            c.style.width = `${totalImages * 100}%`;
        });

        // Velocidad de desplazamiento
        let speed = 0.5; // Ajusta este valor para cambiar la velocidad del carrusel
        let scrollPosition = 0;

        function loop() {
            scrollPosition -= speed;
            // Reiniciar el desplazamiento al final del contenido
            if (Math.abs(scrollPosition) >= carrusel.scrollWidth / 2) {
                scrollPosition = 0;
            }
            container.scrollLeft = scrollPosition;
            requestAnimationFrame(loop); // Llamada recursiva para animar
        }

        loop(); // Iniciar el bucle de animación
    });
});
