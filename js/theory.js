"use strict";

// Объекты !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const obj = new Object();
const options = {
   name: "test",
   width: 1024,
   height: 1024,
   colors: {
      boder: "black",
      bg: "red",
   },
   makeTest: function () {
      console.log("Test method");
   },
};

delete options.name; // Удалить пару ключ-значение

options.lol = "cringe"; // Добавил такую пару

// Чтобы перебирать объекты

for (const key in options) {
   if (typeof options[key] === "object") {
      for (let i in options[key]) {
         console.log(
            `Свойство ${i} в объекте ${key} со значением ${options[key][i]}`
         );
      }
      continue;
   }
   console.log(`Свойство ${key} со значением ${options[key]}`);
}

// Считаем количество свойств в объекте

let counter;
for (const key in options) {
   counter++;
}
// counter == Object.keys(options).lenght;

options.makeTest(); // Проверка своего метода

// Деструктуризация объектов !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const obj = new Object();
const options = {
   name: "test",
   width: 1024,
   height: 1024,
   colors: {
      boder: "black",
      bg: "red",
   },
   makeTest: function () {
      console.log("Test method");
   },
};

const { boder, bg } = options.colors;
console.log(boder);

// Массивы и псевдомассивы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const arr = [1, 6, 2, 8, 4];
arr.pop(); // Удаляет последний элемент
arr.push(10); // Добавляет последний элемент

// !!! Перебор массива !!!

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

for (let element of arr) {
   // Более удобный способ, тут можно использовать break, continue
   console.log(element);
   console.log(element + 1);
}

arr.forEach(function (item, index, arr) {
   // Самый крутой способ
   console.log(`${index}: ${item} in ${arr}`);
});

arr.map(); // Проходится по массиву и модифицирует его

// !!! Из строки делаем массив !!!
const str = "coca-cola, pepsi, fanta, sprite";
const products = str.split(", ");
console.log(products);

products.sort(); // Сортировка массива. Изначально сортирует как строки.

console.log(products.join("; ")); // Наоборт из массива "склеиваем строку"

const arrNums = [5, 3, 116, 86, 3, 23];
console.log(arrNums.sort()); // 116, 23 ,3 ,3 ,5, 86
console.log(arrNums.sort(compareNum)); // 3, 3, 5, 23, 86, 116

function compareNum(a, b) {
   return a - b;
}

// !!!!!!!!! Псевдомассивы !!!!!!!!!!!!!!!!!!
// Выглядят также но не имеют методов которые имеют обычные массивы

// Передача по значению и по ссылке
let a = 5,
   b = a;

b += 5;
console.log(a);
console.log(b);

const obj = {
   a: 5,
   b: 1,
};

const copy = obj; // Объекты передаются по ссылке. То есть обе переменные ссылаются на одно и тоже место в памяти
copy.a = 10;
// console.log(copy);
// console.log(obj);

// Чтобы клонировать объект нужна вот-такой цикл, но вложенные объекты все равно по ссылке передаются
// Создание поверхностной копии, без вложенных структур
function objCopy(mainObj) {
   let objCopy = {};

   for (const key in mainObj) {
      if (Object.hasOwnProperty.call(mainObj, key)) {
         const element = mainObj[key];
         objCopy[key] = element;
      }
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4,
   },
};

const add = {
   d: 17,
   e: 20,
};
console.log(Object.assign(numbers, add)); // Добавить объект в объект, и это новая поверхностная копия
console.log(Object.assign({}, add)); // СДелать поверхностную копию

const newNumbers = objCopy(numbers);
newNumbers = { ...numbers }; // СДелать поверхностную копию
newNumbers.a = 200;
console.log(objCopy(numbers));
console.log(objCopy(newNumbers));

// Копирование массива
const oldArray = ["a", "b", "c"];
// Два способа
const newArray = oldArray.slice();
newArray = [...oldArray];

// Spread operator
const video = ["youtube", "vimeo", "rutube"],
   blogs = ["wordpress", "livejournal", "bloger"],
   internet = [...video, ...blogs, "facebook", "instagram"]; // Он нужен чтобы не делать внутри вложенные массивы, а просто положить туда эти данные

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num);
