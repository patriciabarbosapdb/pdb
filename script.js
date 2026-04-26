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