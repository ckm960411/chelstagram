import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPlayerInfo = createAsyncThunk(
  "player/loadPlayerInfo",
  async ( playerId ) => {
    const response = await axios.get(`/players/${playerId}`)
    return response.data
  } 
)

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    loading: false,
    value: {},
    error: null
  },
  reducers: {
    
  },
  extraReducers: {
    [loadPlayerInfo.pending]: (state, action) => {
      state.loading = true
      state.value = {}
    },
    [loadPlayerInfo.fulfilled]: (state, action) => {
      state.value = action.payload.player
      state.loading = false
    },
    [loadPlayerInfo.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default playerSlice.reducer