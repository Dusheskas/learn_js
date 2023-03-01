"use strict";

// * Функция (аргумент) выполнится после определенного промежутка времени (второго аргумента)
// const timerID = setTimeout(
// 	function (text) {
// 		alert(text); // text берется из 3-го аргумента
// 	},
// 	3000,
// 	"Hello world"
// );

// clearInterval(timerID); // * Остановка setTimeout (таймера)

// * Можно передавать уже существующую функцию
// function logger() {
// 	console.log("text");
// }
// const timerId2 = setTimeout(logger, 4000);

const btn = document.querySelector("button");
let timerID,
	i = 0;

btn.addEventListener("click", () => {
	timerID = setInterval(logger, 2000);
});

function logger() {
	alert("Cringe");
	i++;
	if (i == 3) {
		clearInterval(timerID); // * Остановка setTimeout (таймера)
	}
}

// * Рекурсивный вызов setTimeout
// Так функция таймер будет ждать завершения функции и только потом повторяться
let id = setTimeout(function log() {
	console.log("object");
	// Тело функции
	id = setTimeout(log, 500);
}, 500);

setTimeout(
	function () {
		clearInterval(id);
	},
	2100,
	id
);
