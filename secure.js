const noScreenshot = require('secure-web');

// Función para mostrar el overlay
function showOverlay() {
    const overlay = document.querySelector('.custom-overlay');
    if (overlay) {
        overlay.style.display = 'block';
    }
}

// Función para ocultar el overlay
function hideOverlay() {
    const overlay = document.querySelector('.custom-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Configuración del paquete secure-web
const config = {
    disableRightClick: true,
    disableKeyboardShortcuts: true,
    disableInspectElement: true,
    disablePrintScreen: true,
    disableScreenshot: true,
    disableFunctionKeys: true,
    disableCtrlF4: true,
    mouseLeave: true, // Habilitar para mostrar el overlay cuando el ratón sale de la ventana
    mouseEnterAutoHide: true, // Habilitar para ocultar el overlay cuando el ratón entra de nuevo
    ctrlOverlay: false,
    altOverlay: false,
    shiftOverlay: false,
};

// Aplicar configuración y añadir eventos para el overlay
noScreenshot(config, 'custom-overlay');

// Añadir estilos del overlay
const style = document.createElement('style');
style.innerHTML = `
.custom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1C0A8A ); /* Color de fondo con opacidad */
    display: none; /* Oculto por defecto */
    z-index: 9999; /* Asegúrate de que esté encima de otros elementos */
}
`;
document.head.appendChild(style);

// Crear y añadir el overlay a la página
const overlay = document.createElement('div');
overlay.className = 'custom-overlay';
document.body.appendChild(overlay);

// Eventos para el overlay
document.addEventListener('mouseleave', showOverlay);
document.addEventListener('mouseenter', hideOverlay);
