import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    count: 0,
  },

  reducers: {
    addNewShop: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default shopSlice.reducer;

export const { addNewShop } = shopSlice.actions;
