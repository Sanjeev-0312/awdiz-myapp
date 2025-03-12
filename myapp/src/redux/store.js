import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slice/counterSlice'
import themeSlice from './slice/themeSlice';
import userReducer from "./userSlice.js";

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    theme: themeSlice,
    user: userReducer,
  },
});