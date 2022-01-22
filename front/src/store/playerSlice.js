import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPlayerInfo = createAsyncThunk(
  "GET/LOAD_PLAYER_INFO_REQUEST",
  async ( playerId ) => {
    const response = await axios.get(`/players/${playerId}`)
    return response.data
  } 
)
export const addPlayerComment = createAsyncThunk(
  "POST/ADD_PLAYER_COMMENT_REQUEST",
  async ( data ) => {
    const response = await axios.post(`/players/${data.playerId}/comment`, { ...data })
    return response.data
  } 
)
export const editPlayerComment = createAsyncThunk(
  "PATCH/EDIT_PLAYER_COMMENT_REQUEST",
  async ( data ) => {
    const response = await axios.patch(`/players/${data.playerId}/comment/`, data)
    return response.data
  } 
)
export const deletePlayerComment = createAsyncThunk(
  "DELETE/EDIT_PLAYER_COMMENT_REQUEST",
  async ( data ) => {
    const response = await axios.delete(`/players/${data.playerId}/comment/${data.id}`)
    return response.data
  } 
)

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    loading: false,
    value: [],
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
    [editPlayerComment.pending]: (state, action) => {
      state.loading = true
    },
    [editPlayerComment.fulfilled]: (state, action) => {
      const finded = state.value[0].comments.find(v => v.id === action.payload.id)
      finded.text = action.payload.text
      state.loading = false
    },
    [editPlayerComment.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [deletePlayerComment.pending]: (state, action) => {
      state.loading = true
    },
    [deletePlayerComment.fulfilled]: (state, action) => {
      const findedIndex = state.value[0].comments.findIndex(v => v.id === action.payload.id)
      state.value[0].comments.splice(findedIndex, 1)
      state.loading = false
    },
    [deletePlayerComment.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})


export default playerSlice.reducer