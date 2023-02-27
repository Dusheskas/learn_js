"use strict";

const paper = document.querySelector("#paper"),
	rock = document.querySelector("#rock"),
	scissors = document.querySelector("#scissors"),
	results = document.querySelector("#results");

const data = ["Камень", "Ножницы", "Бумага"];

// paper.addEventListener('click');

paper.addEventListener("click", () => {
	game(2);
});
rock.addEventListener("click", () => {
	game(0);
});
scissors.addEventListener("click", () => {
	game(1);
});

function game(user_answer) {
	//  Генерация ответа пк
	const pc_answer = Math.floor(Math.random() * 3);

	document.querySelector(".user_answer").textContent = data[user_answer];
	document.querySelector(".pc_answer").textContent = data[pc_answer];

	let winnerText = document.querySelector(".winner");

	// switch (user_answer) {
	// 	case 0:
	// 		break;

	// 	default:
	// 		break;
	// }
	// Кто победил
	if (user_answer == 0) {
		if (pc_answer == 0) {
			winnerText.textContent = "Ничья (";
		} else if (pc_answer == 1) {
			//  Комп продул
			winnerText.textContent = "🏆 Вы 🏆";
		} else {
			// комп выиграл
			winnerText.textContent = "🏆 Компьютер 🏆";
		}
	} else if (user_answer == 1) {
		if (pc_answer == 0) {
			// комп выиграл
			winnerText.textContent = "🏆 Компьютер 🏆";
		} else if (pc_answer == 1) {
			// Ничья
			winnerText.textContent = "Ничья (";
		} else {
			//  Комп продул
			winnerText.textContent = "🏆 Вы 🏆";
		}
	} else {
		if (pc_answer == 0) {
			//  Комп продул
			winnerText.textContent = "🏆 Вы 🏆";
		} else if (pc_answer == 1) {
			// комп выиграл
			winnerText.textContent = "🏆 Компьютер 🏆";
		} else {
			// Ничья
			winnerText.textContent = "Ничья (";
		}
	}
}
