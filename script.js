document.addEventListener('DOMContentLoaded', () => {
    const btnContrast = document.getElementById('btn-contrast');
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');

    let fontSize = 100;

    // Alterna o Alto Contraste
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

    // Aumenta a Fonte
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (fontSize < 150) {
                fontSize += 10;
                document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
            }
        });
    }

    // Diminui a Fonte
    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (fontSize > 80) {
                fontSize -= 10;
                document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
            }
        });
    }
});