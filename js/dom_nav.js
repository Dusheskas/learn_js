"use strict";
// * =-=-=-=-=-=-=-
// * Навигация по DOM
// * =-=-=-=-=-=-=-

// Получить детей
console.log(document.body.childNodes); // Выведет все узлы вложенные в body на первом уровне
console.log(document.body.firstElementChild); // Отдает первый вложенный элемент

// const wrapper = document.querySelector(".container");
// console.log(wrapper.firstChild);
// console.log(wrapper.lastChild);

// отделяем текстовые ноды (переносы строк)
for (const node of document.body.childNodes) {
   if (node.nodeName == "#text") {
      continue;
   }
   console.log(node);
}
// Получить соседей
document.querySelector(".second__btn").previousElementSibling;
document.querySelector(".second__btn").nextElementSibling;

// Получить родителя
console.log(document.querySelector(".first__btn").parentElement);

// * data- атрибуты

console.log(document.querySelector("[data-current='2']"));
