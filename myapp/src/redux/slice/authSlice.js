import { createSlice } from '@reduxjs/toolkit'
// const initialState = {
//   value: 0,
// }
export const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null},
  reducers: {
    login: (state) => {
      state.value += 1
    },
    logout: (state) => {
      state.value -= 1
    },
    // reset: (state) => {
    //   state.value = 1;
    // },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement,reset, incrementByAmount } = authSlice.actions

export default authSlice.reducer;