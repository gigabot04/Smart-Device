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
