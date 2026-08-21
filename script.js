// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btnContrast = document.getElementById('btn-contrast');
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');

    let currentFontSize = 100; // Porcentagem padrão

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Aumentar Fonte
    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 150) { // Limite máximo de 150%
            currentFontSize += 10;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}%`);
        }
    });

    // Diminuir Fonte
    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 70) { // Limite mínimo de 70%
            currentFontSize -= 10;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}%`);
        }
    });
});