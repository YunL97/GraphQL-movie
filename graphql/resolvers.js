import { getMovies, getById, addMovie } from "./db";
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id), //첫번째 인자 _ 는 루트 쿼리
    // person: (_, args) => {
    //   console.log(args); 아규먼트 보여줌
    // },
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};
export default resolvers;

// import { people, getById } from "./db";
// const resolvers = {
//   Query: {
//     people: () => people,
//     person: (_, { id }) => getById(id), //첫번째 인자 _ 는 루트 쿼리
//     // person: (_, args) => {
//     //   console.log(args); 아규먼트 보여줌
//     // },
//   },
// };
// export default resolvers;
//----------------------------------------------------------------
// const lee = {
//   name: "lee",
//   age: 25,
//   gender: "male",
// };

// const resolvers = {
//   Query: {
//     // name: () => "lee",
//     //person: () => lee,
//     // person: function () {return lee}위랑 같다
//     person: () => lee,
//   },
// };

// export default resolvers;
