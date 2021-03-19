"use strict";

{
  const btn = document.querySelectorAll(`.footer__item-btn`);
  const list = document.querySelectorAll(`.footer__item`);
  for (let j = 0; j < list.length; j++) {
    list[j].classList.remove(`footer__item--active`);
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener(`click`, () => {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove(`footer__item--active`);
      }
      list[i].classList.add(`footer__item--active`);
    });
  }
}

"use strict";
{
  const phoneInput = document.querySelector(`#tel`);
  const masks = (event) => {
    if (!(event.key === `ArrowLeft` || event.key === `ArrowRight` || event.key === `Backspace` || event.key === `Tab`)) {
      event.preventDefault();
    }
    const mask = `+7 (111) 111-11-11`;

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
      let currentString = phoneInput.value;
      let currentLength = currentString.length;
      if (/[0-9]/.test(event.key)) {
        if (mask[currentLength] === `1`) {
          phoneInput.value = currentString + event.key;
        } else {
          for (let i = currentLength; i < mask.length; i++) {
            if (mask[i] === `1`) {
              phoneInput.value = currentString + event.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  };
  phoneInput.addEventListener(`keydown`, masks);
}

"use strict";
{
  const anchors = document.querySelectorAll(`a[href*="#"]`);

  for (let anchor of anchors) {
    anchor.addEventListener(`click`, function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute(`href`).substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: `smooth`,
        block: `start`
      });
    });
  }
}

"use strict";
{
  const form = document.querySelector(`.popup-call__form--js`);
  const inputName = document.querySelector(`.popup-call input#popup-call__name`);
  const inputTel = document.querySelector(`.popup-call input#popup-call__tel`);
  const inputText = document.querySelector(`.popup-call textarea`);
  let storageName = ``;
  let storageTel = ``;
  let storageText = ``;
  let isStorageSupport = true;
  try {
    storageName = localStorage.getItem(`name`);
    storageTel = localStorage.getItem(`tel`);
    storageText = localStorage.getItem(`text`);
  } catch (err) {
    isStorageSupport = false;
  }
  if (storageName) {
    inputName.value = storageName;
  }
  if (storageTel) {
    inputTel.value = storageTel;
  }
  if (storageText) {
    inputText.value = storageText;
  }
  form.addEventListener(`submit`, (evt) => {
    if (isStorageSupport) {
      localStorage.setItem(`name`, inputName.value);
      localStorage.setItem(`tel`, inputTel.value);
      localStorage.setItem(`text`, inputText.value);
    }
  });
}

"use strict";
{
  const popupCall = document.querySelector(`.popup-call`);
  const btnCall = document.querySelector(`.header__btn`);
  const btnCloseCall = document.querySelector(`.popup-call__close`);
  const overlayCall = document.querySelector(`.overlay`);
  const phoneInputCall = document.querySelector(`#popup-call__tel`);
  const nameInputCall = document.querySelector(`#popup-call__name`);
  const body = document.querySelector(`body`);
  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup(evt);
    }
  };
  const openPopup = (evt) => {
    evt.preventDefault();
    popupCall.classList.add(`popup-call--active`);
    body.classList.add(`body--js`);
    overlayCall.classList.add(`overlay--active`);
    btnCloseCall.addEventListener(`click`, closePopup);
    document.addEventListener(`keydown`, onPopupEscPress);
    overlayCall.addEventListener(`click`, closePopup);
    nameInputCall.focus();
  };
  const closePopup = (evt) => {
    evt.preventDefault();
    popupCall.classList.remove(`popup-call--active`);
    body.classList.remove(`body--js`);
    overlayCall.classList.remove(`overlay--active`);
    btnCloseCall.removeEventListener(`click`, closePopup);
    document.removeEventListener(`keydown`, onPopupEscPress);
    overlayCall.removeEventListener(`click`, closePopup);
  };
  const masks = (event) => {
    if (!(event.key === `ArrowLeft` || event.key === `ArrowRight` || event.key === `Backspace` || event.key === `Tab`)) {
      event.preventDefault();
    }
    const mask = `+7 (111) 111-11-11`;

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
      let currentString = phoneInputCall.value;
      let currentLength = currentString.length;
      if (/[0-9]/.test(event.key)) {
        if (mask[currentLength] === `1`) {
          phoneInputCall.value = currentString + event.key;
        } else {
          for (let i = currentLength; i < mask.length; i++) {
            if (mask[i] === `1`) {
              phoneInputCall.value = currentString + event.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  };
  phoneInputCall.addEventListener(`keydown`, masks);
  btnCall.addEventListener(`click`, openPopup);
}
