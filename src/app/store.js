import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import sessionReducer from "../features/movieSession/sessionSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    session: sessionReducer,
  },
});
