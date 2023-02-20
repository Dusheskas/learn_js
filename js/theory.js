"use strict";

// Объекты

// const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test method');
    }
};

delete options.name; // Удалить пару ключ-значение

options.lol = "cringe"; // Добавил такую пару

// Чтобы перебирать объекты

for (const key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} в объекте ${key} со значением ${options[key][i]}`)
        }
        continue;
    }
    console.log(`Свойство ${key} со значением ${options[key]}`)
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
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test method');
    }
};


const {boder, bg} = options.colors;
console.log(boder);