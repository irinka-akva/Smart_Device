const accordionButtons = document.querySelectorAll('[data-accordion="button"]');
const closeElements = document.querySelectorAll('[data-accordion="element"]:not(.is-active)');
const openElements = document.querySelectorAll('[data-accordion="element"].is-active');

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



const getSwitcherList = () => {
  if (window.innerWidth <= 767) {

    openElements.forEach((openElement) => {
      const accordionActiveItems = openElement.querySelector('.footer__contacts-list-link');

      accordionActiveItems.forEach((activeItem) => {
        activeItem.setAttribute('tabindex', '0');
      });
    });

    closeElements.forEach((closeElement) => {
      const accordionClosedItems = closeElement.querySelector('.footer__contacts-list-link');

      accordionClosedItems.forEach((closedItems) => {
        closedItems.setAttribute('tabindex', '-1');
      });
    });
  }
};

const accordionSwitchHandler = () => {
  accordionButtons.forEach((element) => {
    element.addEventListener('click', getSwitcherList);
    element.addEventListener('keydown', getSwitcherList);
  });
};


export {buttonSwitchHandler, accordionSwitchHandler};


  // if (activeElements !== 'undefined') {
  //   activeElements.document.querySelectorAll('.footer__contacts-list-link').forEach((element) => {
  //     element.setAttribute('tabindex', '0');
  //   });
  // } else {
  //   activeElements.document.querySelectorAll('.footer__contacts-list-link').forEach((element) => {
  //     element.removeAttribute('tabindex', '0');
  //     element.setAttribute('tabindex', '-1');
  //   });
  // }


// const getActiveElements = () => {
//   for (let i = 0, length = elsP.length; i < length; i++) {
//     if (accordionElements[i].classList.contains('is-active')) {
// const activeElements =
//     }
//   }
// }
// };
