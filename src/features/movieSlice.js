import { createSlice } from "@reduxjs/toolkit";
const initSelectedMovie = [];
const initCinemas = [];
const initSelectedSession = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: initSelectedMovie,
    cinemas: initCinemas,
    selectedSession: initSelectedSession,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.selectedSession = action.payload;
      console.log(state.selectedSession);
    },
  },
});

export const { addSelectedMovie, addCinemas, addSessions, addSelectedSession } = movieSlice.actions;

export default movieSlice.reducer;
