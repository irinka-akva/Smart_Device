const accordionButtons = document.querySelectorAll('[data-accordion="button"]');
// const closeElements = document.getElementsByClassName('accordion__element:not(is-active)');
const openElement = document.getElementsByClassName('accordion__element is-active');
const accordionLinks = document.querySelectorAll('.footer__contacts-list-link');


const getSwitcherButton = () => {
  if (window.innerWidth <= 767) {
    accordionButtons.forEach((element) => element.removeAttribute('tabindex'));
  } else {
    accordionButtons.forEach((element) => element.setAttribute('tabindex', '-1'));
  }
};

const buttonSwitchHandler = () => {
  window.addEventListener('keydown', getSwitcherButton);
};


// настройка списка

const getSwitcherList = () => {
  if (window.innerWidth <= 767) {
    console.log(openElement);
    accordionLinks.forEach((activeItem) => {
      activeItem.setAttribute('tabindex', '-1');
    });

    if (openElement) {
      // console.log(openElement);
      const accordionActiveItems = openElement.querySelectorAll('.footer__contacts-list-link');
      // console.log(accordionActiveItems);
      accordionActiveItems.forEach((activeItem) => {
        activeItem.removeAttribute('tabindex');
      });
    } else {
      accordionLinks.forEach((activeItem) => {
        activeItem.setAttribute('tabindex', '-1');
      });

    }
  } else {
    accordionLinks.forEach((activeItem) => {
      activeItem.removeAttribute('tabindex');
    });
  }
};

const accordionSwitchHandler = () => {
  // accordionButtons.forEach((element) => {
  //   element.addEventListener('click', getSwitcherList);
  //   element.addEventListener('keydown', getSwitcherList);
  // });
  window.addEventListener('keydown', getSwitcherList);
};


export {buttonSwitchHandler, accordionSwitchHandler};
