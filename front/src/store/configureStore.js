import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'
import playersReducer from 'store/playersSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer,
  },
})