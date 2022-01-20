import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'
import playersReducer from 'store/playersSlice'
import playerReducer from 'store/playerSlice'
import userReducer from 'store/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer,
    player: playerReducer,
    user: userReducer,
  },
})