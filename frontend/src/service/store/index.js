import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../slices/test";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
