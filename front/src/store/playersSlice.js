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
    loading: false,
    value: [],
    error: null,
  },
  reducers: {
    
  },
  extraReducers: {
    [loadPlayersList.pending]: (state, action) => {
      state.loading = true
    },
    [loadPlayersList.fulfilled]: (state, action) => {
      state.value = action.payload.players
      state.loading = false
    },
    [loadPlayersList.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false
    }
  },
})

export default playersSlice.reducer