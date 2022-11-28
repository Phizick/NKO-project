import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state) => {
      state.test = "test";
    },
  },
});

export const { test } = testSlice.actions;
