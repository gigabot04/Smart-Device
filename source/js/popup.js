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
        checkboxLabel.classList.add(`popup-cal__doc--error`);
      } else {
        checkboxLabel.classList.remove(`popup-cal__doc--error`);
      }
      if (phoneInputCall.value.length !== 18) {
        evt.preventDefault();
        phoneInputCall.classList.add(`popup-cal__doc--error`);
      } else {
        phoneInputCall.classList.remove(`popup-cal__doc--error`);
      }
      if (!nameInputCall.value) {
        nameInputCall.classList.add(`popup-cal__doc--error`);
      } else {
        nameInputCall.classList.remove(`popup-cal__doc--error`);
      }
    }
  };
  phoneInputCall.addEventListener(`keydown`, masks);
  btnCall.addEventListener(`click`, openPopup);
}
