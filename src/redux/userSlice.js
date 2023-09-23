import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { count: 0 },
  reducers: {
    addNewUser: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { addNewUser } = userSlice.actions;
