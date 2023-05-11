import { configureStore } from '@reduxjs/toolkit'
import nameDefiner from './counterSlice'

export default configureStore({
  reducer: {
    namer: nameDefiner
  },
})