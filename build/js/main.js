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
  const submitBtnFeedback = document.querySelector(`.feedback__form button`);
  const labelCheckbox = document.querySelector(`.feedback__form-checkbox`);
  const inputCheckbox = document.querySelector(`#doc`);
  const inputName = document.querySelector(`#name`);
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

  const validity = (evt) => {
    if (!inputCheckbox.checked || phoneInput.value.length !== 18 || !inputName.value) {
      if (!inputCheckbox.checked) {
        evt.preventDefault();
        labelCheckbox.classList.add(`feedback__form--error`);
      } else {
        labelCheckbox.classList.remove(`feedback__form--error`);
      }
      if (phoneInput.value.length !== 18) {
        evt.preventDefault();
        phoneInput.classList.add(`feedback__form--error`);
      } else {
        phoneInput.classList.remove(`feedback__form--error`);
      }
      if (!inputName.value) {
        inputName.classList.add(`feedback__form--error`);
      } else {
        inputName.classList.remove(`feedback__form--error`);
      }
    }
  };
  submitBtnFeedback.addEventListener(`click`, validity);
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
  form.addEventListener(`submit`, () => {
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
  const submitBtn = document.querySelector(`.popup-call button[type="submit"]`);
  const btnCall = document.querySelector(`.header__btn`);
  const btnCloseCall = document.querySelector(`.popup-call__close`);
  const overlayCall = document.querySelector(`.overlay`);
  const phoneInputCall = document.querySelector(`#popup-call__tel`);
  const nameInputCall = document.querySelector(`#popup-call__name`);
  const checkboxCall = document.querySelector(`#popup-call__doc`);
  const checkboxLabel = document.querySelector(`.popup-cal__doc-label`);

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
    submitBtn.addEventListener(`click`, validityTelPopup);
    nameInputCall.focus();
  };
  const closePopup = (evt) => {
    evt.preventDefault();
    popupCall.classList.remove(`popup-call--active`);
    body.classList.remove(`body--js`);
    overlayCall.classList.remove(`overlay--active`);
    btnCloseCall.removeEventListener(`click`, closePopup);
    document.removeEventListener(`keydown`, onPopupEscPress);
    submitBtn.removeEventListener(`click`, validityTelPopup);
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

  const validityTelPopup = (evt) => {
    if (!checkboxCall.checked || phoneInputCall.value.length !== 18 || !nameInputCall.value) {
      if (!checkboxCall.checked) {
        evt.preventDefault();
        checkboxLabel.classList.add(`feedback__form--error`);
      } else {
        checkboxLabel.classList.remove(`feedback__form--error`);
      }
      if (phoneInputCall.value.length !== 18) {
        evt.preventDefault();
        phoneInputCall.classList.add(`feedback__form--error`);
      } else {
        phoneInputCall.classList.remove(`feedback__form--error`);
      }
      if (!nameInputCall.value) {
        nameInputCall.classList.add(`feedback__form--error`);
      } else {
        nameInputCall.classList.remove(`feedback__form--error`);
      }
    }
  };
  phoneInputCall.addEventListener(`keydown`, masks);
  btnCall.addEventListener(`click`, openPopup);
}
