"use strict";
// * =-=-=-=-=-=-=-
// * Рекурсия
// * =-=-=-=-=-=-=-

// function pow(x, n) {
// 	let result = 1;

// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

function pow(x, n) {
	// n - глубина рекурсии
	if (n === 1) {
		// База рекурсии
		return x;
	} else {
		return x * pow(x, n - 1); // Шаг рекурсии
	}
}
debugger;
console.log(pow(2, 3));
debugger;
