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

// Blurring services

var imgId = document.getElementById('111');
var btnGarden = document.querySelector('.gardens-button');
var btnLawn = document.querySelector('.lawn-button');
var btnPlanting = document.querySelector('.planting-button');
var clickGardenBlur = document.querySelectorAll('.planting-services, .lawn-services');
var clickLawnBlur = document.querySelectorAll('.planting-services, .garden-services');
var clickPlantingBlur = document.querySelectorAll('.lawn-services, .garden-services');

btnGarden.addEventListener('click', addBlurGarden);
btnLawn.addEventListener('click', addBlurLawn);
btnPlanting.addEventListener('click', addBlurPlanting);


function addBlurGarden() {
    clickGardenBlur.forEach((userItem) => {
        userItem.classList.toggle('blur');
      })
}

function addBlurLawn() {
    clickLawnBlur.forEach((userItem) => {
        userItem.classList.toggle('blur');
      })
}

function addBlurPlanting() {
    clickPlantingBlur.forEach((userItem) => {
        userItem.classList.toggle('blur');
      })
}



