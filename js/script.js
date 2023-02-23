//* Работа с элементами страницы

"use strict";

// * Получение элементов со страницы (старые сспособы)
const box = document.getElementById("box");
console.log(box);

const buttons = document.getElementsByTagName("button"); // Ищем элементы по тэгу
const circles = document.getElementsByClassName("circle"); // Ищем объекты по классам

//* Современные способы

const hearts = document.querySelectorAll(".heart"); // Возвращает псевдомассив С методом foreach
hearts.forEach((item) => {
   //    console.log(item); Тело цикла
});

const oneHeart = document.querySelector(".heart"); // Возвращает первый попавшийся элемент
const wrapper = document.querySelector(".wrapper");

//* Изменяем стили элементов

box.style.backgroundColor = "violet";
box.style.width = 80 + "vw";
buttons[1].style.borderRadius = 20 + "px";

box.style.cssText = `background-color: brown; width: ${80}vh`;

// Кринжовый способ
// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = "darkgreen";
// }

hearts.forEach((item) => {
   item.style.backgroundColor = "darkgreen";
});

//* Создаем элементы HTML, помещаем внутрь HTML, текст и классы

const div = document.createElement("div");
// const text = document.createTextNode("Это я написал"); Кринжа какая-то
div.classList.add("black"); // Добавили класс элементу
div.innerHTML = "<h1>Hello</h1>"; // Добавляем HTML код внутрь созданного узла
// div.textContent = "World"; Просто текст поместить внутрь
div.insertAdjacentHTML("beforebegin", "<h2>Ку</h2>"); // Впишет этот код перед элементом прямо в страницу
div.insertAdjacentHTML("afterbegin", "<h2>Ку</h2>"); // Впишет этот код в начало элемента

//* Вставляем созданный элемент на страницу, удаляем, заменяем

// document.body.append(div); // Добавить созданный элемент в конец body
document.querySelector(".wrapper").append(div);
// wrapper.append(div); Тоже самое, просто переменную создал
// wrapper.appendChild(div); Устаревший метод
wrapper.prepend(div); // Вставить в начале
// wrapper.insertBefore(div, hearts[0]); Устаревший способ вставить перед

hearts[1].before(div); // Вставить перед этим элементом
hearts[1].after(div); // Вставить после

// circles[0].remove(); // Удалить элемент
// wrapper.removeChild(hearts[1]); Устаревший способ удаления

hearts[0].replaceWith(circles[0]); // Заменить элемент другим
// wrapper.replaceChild(circles[0],hearts[0]) Устаревший способ замены элемента
