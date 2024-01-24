import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
})