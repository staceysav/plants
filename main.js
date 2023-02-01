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

// var btnGarden = document.querySelector('.garden-button');
// var btnLawn = document.querySelector('.lawn-button');
// var btnPlanting = document.querySelector('.planting-button');
// var clickGardenBlur = document.querySelectorAll('.planting-services, .lawn-services');
// var clickLawnBlur = document.querySelectorAll('.planting-services, .garden-services');
// var clickPlantingBlur = document.querySelectorAll('.lawn-services, .garden-services');

// btnGarden.addEventListener('click', addBlurGarden);
// btnLawn.addEventListener('click', addBlurLawn);
// btnPlanting.addEventListener('click', addBlurPlanting);


// function addBlurGarden() {
//     clickGardenBlur.forEach((userItem) => {
//         userItem.classList.toggle('blur');
//       })
// }

// function addBlurLawn() {
//     clickLawnBlur.forEach((userItem) => {
//         userItem.classList.toggle('blur');
//       })
// }

// function addBlurPlanting() {
//     clickPlantingBlur.forEach((userItem) => {
//         userItem.classList.toggle('blur');
//       })
// }

// var serviceButtons = document.querySelectorAll('.service-button');
// serviceButtons.addEventListener('click', makeActiveButtons);


// function makeActiveButtons() {
//     serviceButtons.forEach((userItem) => {
//         userItem.classList.toggle('active-service-button');
//       })
// }

function applyBlur() {
    for (selector of ["planting", 'garden', 'lawn']) {
        let button = document.querySelector(`.${selector}-button`);
        for (element of document.querySelectorAll(`.${selector}-services`)) {
            if (element.classList.contains("blur") ^ !button.classList.contains('active-service-button')) {
                element.classList.toggle('blur');
            }
        }
    }
}
applyBlur()

var serviceButtons = document.querySelectorAll('.service-button');

for (button of serviceButtons) {
    button.addEventListener('click', toggleActive)
}

function toggleActive(event) {
    let count = 0;
    for (i of document.querySelectorAll('.service-button')) {
        if (i.classList.contains('active-service-button') ){
            count += 1;
        }
    }
    if (count >= 2 && !event.srcElement.classList.contains('active-service-button')) {
        return
    }
    event.srcElement.classList.toggle('active-service-button');
    applyBlur();
}


// Adding accordion
var acc = document.getElementsByClassName("prices-tariffs__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active-tariff");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

