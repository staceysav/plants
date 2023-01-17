(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__list ');
    const closeItem = document.querySelector('.nav__close');
    const menuLinks = document.querySelectorAll('.nav__list-item');
    burgerItem.addEventListener('click', () => {
        menu.classList.replace('nav__list_inactive', 'nav__list_active')
        closeItem.classList.replace('nav__close_inactive', 'nav__close_active')
    })
    closeItem.addEventListener(('click'), () => {
        menu.classList.replace('nav__list_active', 'nav__list_inactive');
        closeItem.classList.replace('nav__close_active', 'nav__close_inactive');
    })

    console.log(window.innerWidth);
    if (window.innerWidth <= 585) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener(('click'), () => {
                menu.classList.replace('nav__list_active', 'nav__list_inactive');
                closeItem.classList.replace('nav__close_active', 'nav__close_inactive');
            })
        }
    }
}());