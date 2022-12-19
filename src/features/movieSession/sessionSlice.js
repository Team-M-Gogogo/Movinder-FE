import { createSlice } from "@reduxjs/toolkit";

 const initSession = [];
// const initSelectedMovie = [];
export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    session: initSession,
  },
  reducers: {
    // addMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    
  },
});

// export const { addMovies, addSelectedMovie } = movieSlice.actions;

export default sessionSlice.reducer;
