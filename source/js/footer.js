"use strict";

{
  const btn = document.querySelectorAll(`.footer__item-btn`);
  const list = document.querySelectorAll(`.footer__item`);
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener(`click`, () => {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove(`footer__item--active`);
      }
      list[i].classList.add(`footer__item--active`);
    });
  }
}
