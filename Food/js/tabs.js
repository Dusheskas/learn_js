"use strict";

window.addEventListener("DOMContentLoaded", () => {
	// * Пишем табы

	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"),
		tabsParent = document.querySelector(".tabheader__items");

	// Скрыть ненужные табы (контент) и убрать класс активности у таба(ссылки)
	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach((item) => {
			item.classList.remove("tabheader__item_active");
		});
	}

	// Показывать нужные табы и добавить класс активности у таба (ссылки)
	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add("tabheader__item_active");
	}

	// * Стартовое поведение

	hideTabContent();
	showTabContent(); // Дефолтное значение будет установлено 0

	// * Переключение табов по нажатию
	// Делегированием назначаем обработчик событий на все табы
	tabsParent.addEventListener("click", (event) => {
		const target = event.target;

		// Если мы нажали на таб (не промахнулись)
		if (target && target.classList.contains("tabheader__item")) {
			// Проверяем на какой именно таб мы нажали путем сравнения
			// нажатого со всеми возможными
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
});
