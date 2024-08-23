document.addEventListener('keydown', function(event) {
    // Detecta si se presiona Ctrl, Shift, o PrtSc (Imprimir Pantalla)
    if (event.key === 'Control' || event.key === 'Shift' || event.key === 'PrintScreen') {
        // Muestra un overlay
        showOverlay();
    }
});

document.addEventListener('keyup', function() {
    // El overlay permanecerá hasta que el usuario haga clic, no se oculta automáticamente
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
