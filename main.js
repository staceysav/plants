(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__list ');
    const closeItem = document.querySelector('.nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.replace('nav__list_inactive', 'nav__list_active')
        closeItem.classList.replace('nav__close_inactive', 'nav__close_active')
    })
    closeItem.addEventListener(('click'), () => {
        menu.classList.replace('nav__list_active', 'nav__list_inactive');
        closeItem.classList.replace('nav__close_active', 'nav__close_inactive');
    })
}());