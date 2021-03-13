"use strict";

{
  const btn = document.querySelectorAll(`.footer__js`);
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener(`click`, () => {
      btn[i].classList.toggle(`footer__item-active`);
    });
  }
}
