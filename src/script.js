// Menu
const menu = document.querySelector('#menu');
const menuIcon = menu.querySelector('img');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');

    if(menu.classList.contains('menu-active')) {
        menuIcon.src = './asset/close.svg';
    } else {
        menuIcon.src = './asset/menu.svg'
    }
})