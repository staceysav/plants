(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__list ');
    const close = document.querySelector('.nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.replace('nav__list_inactive', 'nav__list_active')
        close.classList.replace('nav__close_inactive', 'nav__close_active')

    })
}());