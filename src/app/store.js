import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/mycart/MyCartSlice";

export const store = configureStore({
  reducer: CartReducer,
});
