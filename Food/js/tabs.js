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

	// * Таймер

	const deadline = "2023-03-28";

	function getTimeRemaining(endTime) {
		const t = Date.parse(endTime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function addZero(num) {
		if (num >= 0 && num < 10) return "0" + num;
		else {
			return num;
		}
	}

	function setClock(selector, endTime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock(); // Чтобы сразу подставлялось значение, а не через секунду

		function updateClock() {
			const t = getTimeRemaining(endTime);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = "00";
				hours.innerHTML = "00";
				minutes.innerHTML = "00";
				seconds.innerHTML = "00";
			} else {
				days.innerHTML = addZero(t.days);
				hours.innerHTML = addZero(t.hours);
				minutes.innerHTML = addZero(t.minutes);
				seconds.innerHTML = addZero(t.seconds);
			}
		}
	}

	setClock(".timer", deadline);
});
