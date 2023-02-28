/* 
Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

Всегда будет только одно целое число, которое встречается нечетное количество раз.
*/

function findOdd(A) {
	//happy coding!
	var result = {};
	A.forEach((a) => {
		if (result[a] != undefined) ++result[a];
		else result[a] = 1;
	});

	for (const key in result) {
		if (Object.hasOwnProperty.call(result, key)) {
			const element = result[key];
			if (element % 2 != 0) {
				return Number(key);
			}
		} else {
			return 0;
		}
	}
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
