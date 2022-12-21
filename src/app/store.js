import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    customer: customerReducer,
  },
});
