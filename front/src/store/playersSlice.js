import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPlayersList = createAsyncThunk(
  "players/loadPlayersList",
  async () => {
    const response = await axios.get('/players')
    return response.data
  } 
)

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [],
    error: ''
  },
  reducers: {
    
  },
  extraReducers: {
    [loadPlayersList.fulfilled]: (state, action) => {
      state.value = action.payload.players
    },
    [loadPlayersList.rejected]: (state, action) => {
      state.error = action.error.message
    }
  },
})

export default playersSlice.reducer