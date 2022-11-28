import { configureStore } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper';
import { testSlice } from "../slices/test";
export function makeStore() {
  return configureStore({
    reducer: { test: testSlice },
  });
}

export const store = makeStore()

export const wrapper = createWrapper(makeStore,{debug: true})