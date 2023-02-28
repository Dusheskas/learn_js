"use strict";

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против...",
	],
};

const adv = document.querySelectorAll(".promo__adv img"),
	movieBg = document.querySelector(".promo__bg"),
	movieGenre = movieBg.querySelector(".promo__genre"),
	moviesList = document.querySelector(".promo__interactive-list");

adv.forEach((item) => {
	item.remove();
});

movieGenre.textContent = "драма";

movieBg.style.cssText = 'background: url("./img/bg.jpg") center top no-repeat;';

refreshMovieList();

function refreshMovieList() {
	moviesList.innerHTML = ""; // Удалили статичный список
	movieDB.movies.sort(); // Сортируем фильмы по алфавиту

	movieDB.movies.forEach((film, i) => {
		moviesList.innerHTML += `
         <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
         </li>
      `;
	});
}

// =-=-=-=-=--=-=-
const newMovieName = document.querySelector(".adding__input"),
	addMovieBtn = document.querySelector("#addMovie");

addMovieBtn.addEventListener("click", (e) => {
	e.preventDefault(); // Отменяем перезагрузку страницы
	let movieName = newMovieName.value;

	if (movieName.length > 5) {
		movieName = movieName.slice(0, 5) + "...";

		// console.log(movieName);
	}
	movieDB.movies.push(newMovieName.value);
	refreshMovieList();
});
