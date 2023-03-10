const accordionButtons = document.querySelectorAll('[data-accordion="button"]');
const accordionElements = document.querySelectorAll('[data-accordion="element"]');
const activeElements = accordionElements.classList.contains('is-active');

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
    if (activeElements !== 'undefined') {
      activeElements.document.querySelectorAll('.footer__contacts-list-link').forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    } else {
      activeElements.document.querySelectorAll('.footer__contacts-list-link').forEach((element) => {
        element.removeAttribute('tabindex', '0');
        element.setAttribute('tabindex', '-1');
      });
    }
  }
};

const accordionSwitchHandler = () => {
  accordionButtons.forEach((element) => {
    element.addEventListener('click', getSwitcherList);
  });
};

export {buttonSwitchHandler, accordionSwitchHandler};
