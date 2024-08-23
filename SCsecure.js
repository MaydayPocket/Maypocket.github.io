// Manejo del evento contextmenu (click derecho)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("No right click, my friend!");
}, { once: true }); // Usando `{ once: true }` para asegurarnos de que solo se ejecute una vez

// Desactivar teclas de función y otros atajos de teclado
document.addEventListener('keydown', function(event) {
    // Desactivar teclas de función (F1 a F12)
    if (event.key.startsWith('F') && event.key.length === 2) {
        event.preventDefault();
        showOverlay();
    }

    // Desactivar Ctrl + Shift + I, Ctrl + U, Ctrl + C
    if ((event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i') || 
        (event.ctrlKey && event.key.toLowerCase() === 'u') || 
        (event.ctrlKey && event.key.toLowerCase() === 'c')) {
        event.preventDefault();
        showOverlay();
    }

    // Desactivar tecla Meta (Windows)
    if (event.key === 'Meta') {
        event.preventDefault();
        showOverlay();
    }

    // Detecta si se presiona Ctrl, Shift, o PrtSc (Imprimir Pantalla)
    if (event.key === 'Control' || event.key === 'Shift' || event.key === 'PrintScreen') {
        showOverlay();
    }
});

// Remover el evento beforeunload para evitar la alerta de "guardar cambios"
window.removeEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = '';
});

function showOverlay() {
    // Crea el elemento overlay
    let overlay = document.createElement('div');
    overlay.id = 'screenshotOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#1C0A8A';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.color = '#E145FC';
    overlay.style.fontFamily = 'Courier, monospace';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';
    overlay.innerHTML = `
        <div>
            <p>Sorry, if you're watching this it's because you pressed Ctrl, Shift or PrtSc.</p>
            <p>This site does not allow screenshots! Click anywhere to continue.</p>
        </div>
    `;
    document.body.appendChild(overlay);

    // Añade un evento de clic para ocultar el overlay
    overlay.addEventListener('click', function() {
        hideOverlay();
    });
}

function hideOverlay() {
    let overlay = document.getElementById('screenshotOverlay');
    if (overlay) {
        overlay.remove();
    }
}
