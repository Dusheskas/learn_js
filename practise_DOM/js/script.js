"use strict";

// Чтобы скрипт работал когда HTML построится
document.addEventListener("DOMContentLoaded", () => {
	// Типо с бд пришло
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против...",
		],
	};

	// Все переменные
	const adv = document.querySelectorAll(".promo__adv img"),
		movieBg = document.querySelector(".promo__bg"),
		movieGenre = movieBg.querySelector(".promo__genre"),
		moviesList = document.querySelector(".promo__interactive-list"),
		addForm = document.querySelector("form.add"),
		newMovieName = addForm.querySelector(".adding__input"),
		checkbox = addForm.querySelector("[type='checkbox']"),
		deleteBtns = document.querySelectorAll(".delete");

	// Функции
	const deleteAdv = (arr) => {
		arr.forEach((item) => {
			item.remove();
		});
	};

	const makeChanges = () => {
		movieGenre.textContent = "драма";

		movieBg.style.cssText =
			'background: url("./img/bg.jpg") center top no-repeat;';
	};

	const sortArr = (arr) => {
		movieDB.movies.sort(); // Сортируем фильмы по алфавиту
	};

	function createMovieList(films, parent) {
		parent.innerHTML = ""; // Удалили статичный список

		sortArr(movieDB.movies);

		films.forEach((film, i) => {
			parent.innerHTML += `
			 <li class="promo__interactive-item">${i + 1}. ${film}
				<div class="delete"></div>
			 </li>
		  `;
		});

		document.querySelectorAll(".delete").forEach((btn, i) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();
				films.splice(i, 1);
				createMovieList(movieDB.movies, moviesList);
			});
		});
	}

	// * Event Listeners

	addForm.addEventListener("submit", (event) => {
		event.preventDefault(); // Отменяем перезагрузку страницы

		let movieName = newMovieName.value;

		// Проверка что введены какие-то данные
		if (movieName) {
			if (movieName.length > 21) {
				// movieName = movieName.slice(0, 21) + "...";
				movieName = movieName.substring(0, 22) + "...";
			}
			movieDB.movies.push(movieName);
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, moviesList);
		}

		if (checkbox.checked) {
			console.log("Добавлен любимый фильм");
		}

		event.target.reset(); // Сброс формы
	});

	// * =-=-=-=-=-=-=-=-=-=- Ход программы =-=-=-=-=-=-=-=-=-=-==

	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, moviesList);
});
