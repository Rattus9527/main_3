import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = [...state.item, ...action.payload];
    },
  },
});

export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
