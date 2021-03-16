"use strict";
{
  const popupCall = document.querySelector(`.popup-call`);
  const btnCall = document.querySelector(`.header__btn`);
  const btnCloseCall = document.querySelector(`.popap-call__close`);
  const overlayCall = document.querySelector(`.overlay`);
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

  btnCall.addEventListener(`click`, openPopup);
}
