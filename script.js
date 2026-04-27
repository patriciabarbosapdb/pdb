function filterSelection(category) {
    const items = document.querySelectorAll('.mural-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // 1. Lógica para mostrar/esconder
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex'; // Mostra todos
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'flex'; // Mostra se tiver a classe
            } else {
                item.style.display = 'none'; // Esconde se não tiver
            }
        }
    });

    // 2. Lógica para mudar a cor do botão ativo
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Se o clique foi neste botão, adiciona a classe active
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });
}

// Garante que começa mostrando tudo ao carregar a página
window.onload = () => filterSelection('all');

const toggleSwitch = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Aplica o tema salvo ao carregar
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Troca o tema e salva no navegador
toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
});