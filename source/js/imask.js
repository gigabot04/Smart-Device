"use strict";
{
  const phoneInput = document.querySelector(`#tel`);
  const submitBtn = document.querySelector(`.feedback__form button`);
  const labelCheckbox = document.querySelector(`.feedback__form-checkbox`);
  const inputCheckbox = document.querySelector(`#doc`);
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

  const validityTel = (evt) => {
    if (phoneInput.value.length !== 18) {
      evt.preventDefault();
      phoneInput.setCustomValidity(`Номер должен содержать 11 цифр`);
      phoneInput.reportValidity();
    } else {
      phoneInput.setCustomValidity(``);
    }

    submitBtn.addEventListener(`click`, checkbox);
  };

  const checkbox = (evt) => {
    if (!inputCheckbox.checked) {
      evt.preventDefault();
      labelCheckbox.classList.add(`feedback__form-checkbox--error`);
    } else {
      labelCheckbox.classList.remove(`feedback__form-checkbox--error`);
      submitBtn.removeEventListener(`click`, checkbox);
    }
  };
  submitBtn.addEventListener(`click`, validityTel);
  phoneInput.addEventListener(`keydown`, masks);

}
