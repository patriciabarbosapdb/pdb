function filterSelection(category) {
    const items = document.querySelectorAll('.mural-item');
    const buttons = document.querySelectorAll('.filter-btn');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex';
        } else {
            item.style.display = item.classList.contains(category) ? 'flex' : 'none';
        }
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick')?.includes(category)) {
            btn.classList.add('active');
        }
    });
}

// Inicializa o filtro
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.mural-item').length > 0) {
        filterSelection('all');
    }
});

// LÓGICA DO TEMA
const toggleSwitch = document.querySelector('#theme-toggle');

// Apenas marca o botão como "checado" se o tema for dark
if (localStorage.getItem('theme') === 'dark' && toggleSwitch) {
    toggleSwitch.checked = true;
}

// Troca o tema ao clicar
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    });
}

// Se não for usar stickers, pode apagar este bloco abaixo:
const stickers = document.querySelectorAll('.sticker-decor');
stickers.forEach(sticker => {
    sticker.style.cursor = 'grab';
    sticker.style.pointerEvents = 'auto';

    let isDragging = false;
    sticker.onmousedown = (e) => {
        isDragging = true;
        sticker.style.cursor = 'grabbing';
        let shiftX = e.clientX - sticker.getBoundingClientRect().left;
        let shiftY = e.clientY - sticker.getBoundingClientRect().top;

        document.onmousemove = (e) => {
            if (!isDragging) return;
            sticker.style.left = e.pageX - shiftX + 'px';
            sticker.style.top = e.pageY - shiftY + 'px';
        };

        document.onmouseup = () => {
            isDragging = false;
            sticker.style.cursor = 'grab';
            document.onmousemove = null;
        };
    };
    sticker.ondragstart = () => false;
});