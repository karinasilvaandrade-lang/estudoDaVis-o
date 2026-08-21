document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção segura dos botões do HTML
    const btnContrast = document.getElementById('btn-contrast');
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');

    // Estado inicial da fonte (em porcentagem)
    let fontSize = 100;

    // 2. Evento para o Alto Contraste (Alterna a classe 'high-contrast' no body)
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

    // 3. Evento para Aumentar Fonte (Limite máximo: 150%)
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (fontSize < 150) {
                fontSize += 10;
                document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
            }
        });
    }

    // 4. Evento para Diminuir Fonte (Limite mínimo: 80%)
    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (fontSize > 80) {
                fontSize -= 10;
                document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
            }
        });
    }
});