import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPlayerInfo = createAsyncThunk(
  "player/loadPlayerInfo",
  async ( playerId ) => {
    const response = await axios.get(`/players/${playerId}`)
    return response.data
  } 
)

export const addPlayerComment = createAsyncThunk(
  "player/addPlayerComment",
  async ( data ) => {
    const response = await axios.post(`/players/${data.playerId}/comment`, { ...data })
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
      state.value = []
    },
    [loadPlayerInfo.fulfilled]: (state, action) => {
      state.value = action.payload.player
      state.loading = false
    },
    [loadPlayerInfo.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [addPlayerComment.pending]: (state, action) => {
      state.loading = true
    },
    [addPlayerComment.fulfilled]: (state, action) => {
      state.value[0].comments.unshift(action.payload)
      state.loading = false
    },
    [addPlayerComment.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})


export default playerSlice.reducer