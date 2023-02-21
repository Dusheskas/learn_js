"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   private: false,
   rememberMyFilms: function () {
      for (let i = 0; i < personalMovieDB.count; i++) {
         const movieName = prompt("Один из последних фильмов?"),
            movieGrade = +prompt("На сколько его оцените?");

         if (movieName == null || movieName.length > 50 || movieName == " ") {
            i--;
         } else {
            personalMovieDB.movies[movieName] = movieGrade;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         alert("Ты кринжа");
      } else if (10 <= personalMovieDB.count < 30) {
         alert("Классик");
      } else {
         alert("Красавэлла");
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         let genre = prompt(`${i + 1}-й ваш любимый жанр?`);
         if (genre == "" || genre == null) {
            console.log("Лох ванючий, введи что-то");
            i--;
         } else {
            personalMovieDB.genres[i] = genre;
         }
      }

      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   },
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (
         personalMovieDB.count == "" ||
         personalMovieDB.count == null ||
         isNaN(personalMovieDB.count)
      ) {
         personalMovieDB.count = +prompt(
            "Сколько фильмов вы уже посмотрели?",
            ""
         );
      }
   },
   toggleVisibleMyDb: function () {
      personalMovieDB.private = !personalMovieDB.private;
      // if (personalMovieDB.private) {
      //    personalMovieDB.private = false;
      // } else {
      //    personalMovieDB.private = true;
      // }
   },
};
