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
      evt.preventDefault();
      localStorage.setItem(`name`, inputName.value);
      localStorage.setItem(`tel`, inputTel.value);
      localStorage.setItem(`text`, inputText.value);
    }
  });
}
