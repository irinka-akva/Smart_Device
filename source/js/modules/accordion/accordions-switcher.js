const accordionButtons = document.querySelectorAll('[data-accordion="button"]');
const openElement = document.getElementsByClassName('accordion__element is-active');
const accordionLinks = document.querySelectorAll('[data-accordion="element-link"]');

// настройка переключения заголовков аккордеона по Tab

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

// настройка переключения списка аккордеона по Tab

const getSwitcherList = () => {
  if (window.innerWidth <= 767) {
    accordionLinks.forEach((activeItem) => {
      activeItem.setAttribute('tabindex', '-1');
    });

    if (openElement.length !== 0) {
      const openElementArray = Array.from(openElement);
      const accordionActiveItems = openElementArray[0].querySelectorAll('[data-accordion="element-link"]');
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
  accordionButtons.forEach((element) => {
    element.addEventListener('click', getSwitcherList);
    element.addEventListener('keydown', getSwitcherList);
  });
};


export {buttonSwitchHandler, accordionSwitchHandler};
