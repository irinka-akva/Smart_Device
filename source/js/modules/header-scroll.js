const header = document.querySelector('[data-scroll="header"]');
const main = document.querySelector('[data-scroll="main"]');
const headerHeight = header.offsetHeight;

const addScroll = () => {
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > 1) {
      header.classList.add('header__fixed');
      if (window.innerWidth >= 1024) {
        main.style.marginTop = `${headerHeight}px`;
      }
    } else {
      header.classList.remove('header__fixed');
      main.style.marginTop = null;
    }
  });
};

export {addScroll};

