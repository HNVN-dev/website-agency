const menuBurgerBtn = document.querySelector('#menu-burger');
const menuMobile = document.querySelector('.nav__links');


menuBurgerBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
    menuBurgerBtn.classList.toggle('active');
});
