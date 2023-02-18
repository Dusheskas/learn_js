"use strict"

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}



function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        const movieName = prompt("Один из последних фильмов?"),
              movieGrade = +prompt("На сколько его оцените?");
        
        if(movieName == null || movieName.length>50 || movieName == ' ') {
            i--;
        }
        else {
            personalMovieDB.movies[movieName] = movieGrade;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Ты кринжа");
    }
    else if(10 <= personalMovieDB.count < 30) {
        alert("Классик");
    }
    else {
        alert("Красавэлла");
    }
}

function showMyDB() {
    if(personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`${i}-й ваш любимый жанр?`);
    }
}

start();
writeYourGenres();
// rememberMyFilms();
detectPersonalLevel();

