/*
Пит любит печь торты. У него есть рецепты и ингредиенты. К сожалению, он не силен в математике. Поможешь ему узнать, сколько тортов он сможет испечь, учитывая его рецепты?

Напишите функциюcakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект) и возвращает максимальное количество тортов, которые Пит может испечь (целое число). Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). Ингредиенты, отсутствующие в объектах, можно считать равными 0.
*/

function cakes(recipe, available) {
	// Элементы в рецепте
	let bigger = [];

	if (Object.keys(available).every((value) => value == Infinity)) {
		return Infinity;
	}

	for (const key in recipe) {
		// Если нужных ингридиентов нет вообще - сразу возвращать ноль
		if (!Object.hasOwnProperty.call(available, key)) return 0;
		else if (available[key] >= recipe[key]) {
			bigger.push(Math.floor(available[key] / recipe[key]));
		}
	}

	return Number(Math.min(...bigger));
}

console.log(
	cakes(
		{ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
		{ sugar: Infinity, flour: Infinity, milk: Infinity }
	)
);

// console.log(
// 	cakes(
// 		{ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
// 		{ flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
// 	)
// );
