import { combineReducers } from "@reduxjs/toolkit";

import { labReducer } from "./labSlice";

export const rootReducer = combineReducers({
  labReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
