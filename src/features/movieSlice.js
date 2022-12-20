import { createSlice } from "@reduxjs/toolkit";
const initSelectedMovie = {};
const initSelectedSession = {};
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: initSelectedMovie,
    selectedSession: initSelectedSession,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.selectedSession = action.payload;
    },
  },
});

export const { addSelectedMovie, addSessions, addSelectedSession } =
  movieSlice.actions;

export default movieSlice.reducer;
