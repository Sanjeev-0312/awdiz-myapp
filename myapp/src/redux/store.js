import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slice/counterSlice'
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    theme: themeReducer,
  },
});