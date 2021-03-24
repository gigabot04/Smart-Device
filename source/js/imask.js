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
