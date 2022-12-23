import { createSlice } from "@reduxjs/toolkit";
const initSelectedMovie = {};
const initSelectedSession = {};
const initSelectedCinema = {};
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: initSelectedMovie,
    selectedSession: initSelectedSession,
    selectedCinema: initSelectedCinema,
    selectedSeats: [],
    selectedTickets: [],
    selectedTicketsPriceTotal: 0,
    foodTotal: 0,
    selectedFood: [],
    finalSelectedFood: [],
    showLogin: false,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addSelectedCinema: (state, action) => {
      state.selectedCinema = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.selectedSession = action.payload;
    },
    changeFoodTotal: (state, action) => {
      state.foodTotal += action.payload;
    },
    addSelectedFood: (state, action) => {
      state.selectedFood.push(action.payload);
    },
    removeSelectedFood: (state, action) => {
      const index = state.selectedFood.indexOf(action.payload);
      state.selectedFood.splice(index, 1);
    },
    handleFinalSelectedFood: (state) => {
      let counts = {};
      for (let i = 0; i < state.selectedFood.length; i++) {
        counts[state.selectedFood[i]] = 1 + (counts[state.selectedFood[i]] || 0);
      }
      for (let foodId in counts){
        state.finalSelectedFood.push({
          "item": foodId,
          "quantity": counts[foodId]
        })
      }
      
    },
    changeShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    updateSelectedSeats: (state, action) => {
      state.selectedSeats = action.payload;
    },
    updateSelectedTickets: (state, action) => {
      state.selectedTickets = action.payload;
    },
    updateSelectedTicketsPriceTotal: (state, action) => {
      state.selectedTicketsPriceTotal = action.payload;
    },
  },
});

export const {
  addSelectedMovie,
  addSelectedCinema,
  addSelectedSession,
  changeFoodTotal,
  addSelectedFood,
  handleFinalSelectedFood,
  removeSelectedFood,
  changeShowLogin,
  updateSelectedSeats,
  updateSelectedTickets,
  updateSelectedTicketsPriceTotal,
} = movieSlice.actions;

export default movieSlice.reducer;
