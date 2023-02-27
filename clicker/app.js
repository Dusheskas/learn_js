"use strict";

const clickBtn = document.querySelector(".score_up"),
	scoreText = document.querySelector(".score"),
	upgradeBtn = document.querySelector(".upgrade"),
	levelText = document.querySelector(".level");

let score = 0,
	level = 1;

clickBtn.addEventListener("click", scoreUp);
// clickBtn.addEventListener("keydown", scoreUp);

upgradeBtn.addEventListener("click", () => {
	if (isUpgrade(score, level)) {
		level == 1 ? (level += 1) : (level += 2);
		levelText.textContent = `+ ${level}`;
	}

	if (!isUpgrade(score, level)) {
		upgradeBtn.style.cssText = "background-color: cornflowerblue;";
	}
});

function isUpgrade(score, level) {
	if (score >= Math.pow(level, 3)) {
		return true;
	}
	return false;
}

function scoreUp() {
	score = score + level;
	scoreText.textContent = score;

	if (isUpgrade(score, level)) {
		upgradeBtn.style.cssText = "background-color:darkseagreen;";
	} else {
		upgradeBtn.style.cssText = "background-color: cornflowerblue;";
	}
}
