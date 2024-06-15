const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    duration: 148,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
    duration: 169,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
    duration: 152,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    rating: 8.9,
    duration: 154,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.3,
    duration: 142,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
    duration: 175,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    rating: 8.7,
    duration: 136,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    rating: 8.8,
    duration: 139,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: 8.8,
    duration: 142,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    year: 2001,
    rating: 8.8,
    duration: 178,
  },
];

//1 forEach
let movieTitle = movies.forEach((movie) => {
  console.log(movie.title);
});
//So forEach metodata ja pominuvame celata niza i gi vadime samo iminjata na filmovite

//2 filter

let movieByNolan = movies.filter(
  (movie) => movie.director === "Christopher Nolan"
);
console.log(movieByNolan);
//Gi filtrira site filmovi cij shto direktor e Christopher Nolan i gi vadi vo nova niza

//3 map

let yearOfMovie = movies
  .map((movie) => `${movie.title}: ${movie.year}`)
  .forEach((info) => console.log(info));
//Map metodata pravi nova niza koja shto gi sodrzi iminjata a filmovite i godinata koga se snimeni istite
// a so forEach ja izminuvame nizata sozdadena od .map i sekoj element od nizata go pecatime vo console.log

//4 sort
let sortMovies = movies.sort((a, b) => b.rating - a.rating);
console.log(sortMovies);
// Ja zema nizata i ja sortira spored opagjacki redosled na rejtingot

//5 some

let highRating = movies.some((movie) => movie.rating >= 9.0);
console.log(highRating);
//proveruva dali bar eden od filmovite ima rating pogolem ili ednakov na 9.0 i ni vrakja true ako bar eden go pominuva testot a vo sprotivno false

//6 every

const movieYear = movies.every((movie) => movie.year >= 1990);
console.log(movieYear);
// proveruva dali site filmovi se napraveni vo ili posle 1990 godina i ni vrakja false bidejki eden od filmovite e napraven 1972
//ni vrakja true ako site filmovi go pominuvaat testot

//7 find
let movieDuration = movies.find((movie) => movie.duration >= 150);
console.log(movieDuration);

//Go bara prviot objekt i go vrakja, koj go pominuva testot duration longer or equal to 150 minutes
