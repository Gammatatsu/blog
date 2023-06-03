const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-main-list");


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-main-list--active')
});