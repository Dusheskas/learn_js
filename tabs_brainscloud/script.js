"use strict";

const tabsBtnWrapper = document.querySelector(".tabs__nav"),
	tabsBtns = document.querySelectorAll(".tabs__nav-btn"),
	tabsItems = document.querySelectorAll(".tabs__item"),
	tabsItemWrapper = document.querySelector(".tabs__content");

tabsBtnWrapper.addEventListener("click", (event) => {
	if (event.target && event.target.matches("button.tabs__nav-btn")) {
		removeActiveClass(); // После клика будет сначала убран этот класс у всех
		const tabId = event.target.getAttribute("data-tab"); // Не особо нужна

		// Даём класс активности
		event.target.classList.add("active");
		document.querySelector(tabId).classList.add("active");
	}
});

function removeActiveClass() {
	tabsBtns.forEach((item) => {
		item.classList.remove("active");
	});
	tabsItems.forEach((item) => {
		item.classList.remove("active");
	});
}

// Или без делегирования
// tabsBtns.forEach((item) => {
// 	item.addEventListener("click", () => {

// 	});
// });
