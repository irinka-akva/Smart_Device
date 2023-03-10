const accordionButtons = document.querySelectorAll('[data-accordion="button"]');

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

export {buttonSwitchHandler};
