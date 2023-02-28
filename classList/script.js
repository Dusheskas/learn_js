// * =-=-=-=-=-=-=-=-=-=-=-=-
// * Работа с классами из js. Делегирование
// * =-=-=-=-=-=-=-=-=-=-=-=-

const btns = document.querySelectorAll("button"),
	wrapper = document.querySelector(".btn-block");

// btns[1].classList.add("red"); // Добавить класс элементу
// btns[1].classList.add("red", "black"); // Добавить несколько классов элементу
// btns[1].classList.remove("red"); // Убрать класс у элемента
// btns[1].classList.toggle("red"); // Если не было - добавит, если есть класс - уберет

// btns[0].classList.length; // Узнать сколько классов у элемента
// btns[1].classList.contains("red"); // Возвращает true если у элемента есть такой класс
// btns[0].classList.item(0); // Возвращает первый класс у элемента

// console.log(btns[0].className); // Кринжовый старый способ узнать все классы. Возвращает строку

// Задать класс элементу, взаимодействуя с другим
btns[0].addEventListener("click", () => {
	// if (!btns[1].classList.contains("red")) btns[1].classList.add("red");
	// else btns[1].classList.remove("red");

	btns[1].classList.toggle("red"); // Так проще, но не всегда подходит
});

// * Делегирование. Нужно навешивать на родителя

wrapper.addEventListener("click", (event) => {
	// проверяем, нажали ли мы на кнопку
	if (event.target && event.target.tagName == "BUTTON") {
		console.log("hello");
	}

	// Если нажал на элемент с классом red - выполняется действие
	if (event.target && event.target.classList.contains("red")) {
		console.log("world");
	}

	// Продвинутый способ
	if (event.target && event.target.matches("button.red")) {
		console.log("hello");
	}
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
