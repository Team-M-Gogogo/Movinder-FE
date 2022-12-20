import { createSlice } from "@reduxjs/toolkit";

const initMovies = [
  {
    movieId: "63a00c9e8c78635f83e882f4",
    movieName: "Advengers 1",
    description: "action movie",
    duration: 116,
    movieSessionIds: ["63a010108c78635f83e882f7"],
    lastShowDateTime: "2022-12-22T03:45:00",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    movieId: "63a026788c78635f83e882f9",
    movieName: "Advengers 2",
    description: "another action movie",
    duration: 116,
    movieSessionIds: ["63a02c498c78635f83e882fb"],
    lastShowDateTime: "2022-12-22T03:45:00",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    movieId: "63a00c9e8c78635f83e882f5",
    movieName: "Advengers 3",
    description: "action movie",
    duration: 116,
    movieSessionIds: ["63a010108c78635f83e882f7"],
    lastShowDateTime: "2022-12-22T03:45:00",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    movieId: "63a026788c78635f83e882f8",
    movieName: "Advengers 4",
    description: "another action movie",
    duration: 116,
    movieSessionIds: ["63a02c498c78635f83e882fb"],
    lastShowDateTime: "2022-12-22T03:45:00",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
];
const initSelectedMovie = [];
const initCinemas = [];
const initSessions = [];
const initSelectedSession = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: initMovies,
    selectedMovie: initSelectedMovie,
    cinemas: initCinemas,
    sessions: initSessions,
    selectedSession: initSelectedSession,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
    addSessions: (state, action) => {
      state.sessions = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.selectedSession = action.payload;
    },
  },
});

export const { addMovies, addSelectedMovie, addCinemas, addSessions, addSelectedSession } = movieSlice.actions;

export default movieSlice.reducer;
