import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./stateSlice/stateSlice";
import logSlice from "./logSlice/logSlice";

const store = configureStore({
  reducer: {
    state: stateSlice,
    log: logSlice,
  },
});

export default store;
