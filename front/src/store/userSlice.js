import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadMyInfo = createAsyncThunk(
  "user/loadMyInfo",
  async () => {
    const response = await axios.get(`/user/myInfo`)
    return response.data
  } 
)
export const signUpRequest = createAsyncThunk(
  "POST/SIGN_UP_REQUEST",
  async (data) => {
    const response = await axios.post(`/user/signup`, data)
    return response.data
  } 
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    myInfo: null,
    error: null
  },
  reducers: {
  
  },
  extraReducers: {
    [loadMyInfo.pending]: (state, action) => {
      state.loading = true
      state.myInfo = null
    },
    [loadMyInfo.fulfilled]: (state, action) => {
      state.myInfo = action.payload
      state.loading = false
    },
    [loadMyInfo.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [signUpRequest.pending]: (state, action) => {
      state.loading = true
      state.myInfo = null
    },
    [signUpRequest.fulfilled]: (state, action) => {
      state.myInfo = action.payload
      state.loading = false
    },
    [signUpRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default userSlice.reducer