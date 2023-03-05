const moreText = document.querySelector('[data-show-more="more-text"]');
const moreTextMobile = document.querySelector('[data-show-more="more-text-mobile"]');
const buttonMore = document.querySelector('[data-show-more="button-more"]');

const showExtraText = () => {
  if (window.innerWidth <= 767) {
    if (moreText.style.display === 'block') {
      moreTextMobile.style.display = 'none';
      moreText.style.display = 'none';
      buttonMore.innerHTML = 'Подробнее';
    } else {
      moreTextMobile.style.display = 'inline';
      moreText.style.display = 'block';
      buttonMore.innerHTML = 'Свернуть';
    }
  } else {
    if (moreText.style.display === 'block') {
      moreText.style.display = 'none';
      moreTextMobile.style.display = 'inline';
      buttonMore.innerHTML = 'Подробнее';
    } else {
      moreText.style.display = 'block';
      moreTextMobile.style.display = 'inline';
      buttonMore.innerHTML = 'Свернуть';
    }
  }
};

const extraTextOpenAndCloseHandler = () => {
  buttonMore.addEventListener('click', showExtraText);
};

export {extraTextOpenAndCloseHandler};
