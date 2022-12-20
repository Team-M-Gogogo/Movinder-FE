import { createSlice } from "@reduxjs/toolkit";
const initCustomer = [];

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    selectedCustomer: initCustomer,
  },
  reducers: {
    addCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
