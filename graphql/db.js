import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0.6) {
    REQUEST_URL += `limit=${limit}&`;
  }

  if (rating > 0) {
    REQUEST_URL += `minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL) //node fetch 랑 axios랑 같음 근데 후자가 더편함
    .then((res) => res.json())
    .then((json) => {
      return json.data.movies;
    });
  // return fetch(`${API_URL}`)
  //   .then((res) => res.json())
  //   .then((json) => json.data.movies);
};
// let movies = [
//   {
//     id: 0,
//     name: "star",
//     score: 0,
//   },
//   {
//     id: 1,
//     name: "star",
//     score: 0,
//   },
//   {
//     id: 2,
//     name: "star",
//     score: 0,
//   },
//   {
//     id: 3,
//     name: "star",
//     score: 0,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id != id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
// // export const people = [
// //   {
// //     id: "0",
// //     name: "lee",
// //     age: 25,
// //     gender: "male",
// //   },
// //   {
// //     id: "1",
// //     name: "lee1",
// //     age: 25,
// //     gender: "male",
// //   },
// //   {
// //     id: "2",
// //     name: "lee2",
// //     age: 25,
// //     gender: "male",
// //   },
// // ];

// // export const getById = (id) => {
// //   const filteredPeople = people.filter((person) => person.id === String(id));
// //   //   console.log(people.filter((person) => person));
// //   console.log(id);
// //   return filteredPeople[0];
// // };
// // //export default db;
