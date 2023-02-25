"use strict";
// * =-=-=-=-=-=-=-
// * События и их обработчики
// * =-=-=-=-=-=-=-

// const btn = document.querySelector("first__btn");
// Не совсем правильный способ
// btn.onclick = function () {
//    alert("click clack");
// };

const deleteElement = (e) => {
   console.log(e.target);
};

const btn = document.querySelector(".second__btn");
//    overlay = document.querySelector(".overlay");

// btn.addEventListener("click", () => {
//    alert("click");
//    if (true) {
//       console.log();
//    }
// });

// overlay.addEventListener("click", deleteElement);
// btn.addEventListener("click", deleteElement);

// * Отмена стандартного поведения
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
   e.preventDefault(); // Важно разместить в самом начале (тут, короче)
   // А не тут
   // И не тут ;)
});

// * Задать обработчик событий на несколько элементов

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
   button.addEventListener(
      "dblclick",
      () => {
         alert("Что ты хочешь??");
      },
      { once: true } // Event options
   );
});
// TODO Clicker on JS
