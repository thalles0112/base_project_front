import { createSlice } from '@reduxjs/toolkit'

export const nameDefiner = createSlice({
  name: 'namer',
  initialState: {
    name: localStorage.getItem('user'),
  },
  reducers: {
    setName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload
      localStorage.setItem('user', action.payload)
    },
   
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName } = nameDefiner.actions

export default nameDefiner.reducer