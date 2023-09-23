import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    user: userReducer,
  },
});
