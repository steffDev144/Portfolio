const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');
        
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          hamburger = document.querySelector('.hamburger'),
          overlay = document.querySelector('.menu__overlay'),
          elemClose = document.querySelectorAll('.menu__link'),
          mc = new Hammer(menu);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    elemClose.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });

    mc.on("swipeleft", () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});