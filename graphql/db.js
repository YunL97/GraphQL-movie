let movies = [
  {
    id: 0,
    name: "star",
    score: 0,
  },
  {
    id: 1,
    name: "star",
    score: 0,
  },
  {
    id: 2,
    name: "star",
    score: 0,
  },
  {
    id: 3,
    name: "star",
    score: 0,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
// export const people = [
//   {
//     id: "0",
//     name: "lee",
//     age: 25,
//     gender: "male",
//   },
//   {
//     id: "1",
//     name: "lee1",
//     age: 25,
//     gender: "male",
//   },
//   {
//     id: "2",
//     name: "lee2",
//     age: 25,
//     gender: "male",
//   },
// ];

// export const getById = (id) => {
//   const filteredPeople = people.filter((person) => person.id === String(id));
//   //   console.log(people.filter((person) => person));
//   console.log(id);
//   return filteredPeople[0];
// };
// //export default db;
