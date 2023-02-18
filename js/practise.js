const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < personalMovieDB.count; i++) {
    const movieName = prompt("Один из последних фильмов?");
    const movieGrade = +prompt("На сколько его оцените?");

    personalMovieDB.movies[movieName] = movieGrade;
}

console.dir(personalMovieDB);