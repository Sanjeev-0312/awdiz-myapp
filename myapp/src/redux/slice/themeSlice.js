import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  darkMode: false, // Default theme light hoga
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Dark mode ko toggle karega
    },
    
  },
});

export const { toggleTheme } = themeSlice.actions; // Action export karna zaroori hai
export default themeSlice.reducer; // Reducer ko export karna zaroori hai



