import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadMyInfo = createAsyncThunk(
  "GET/LOAD_MY_INFO_REQUEST",
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
export const loginRequest = createAsyncThunk(
  "POST/LOG_IN_REQUEST",
  async (data) => {
    const response = await axios.post(`/user/login`, data)
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
    closeError: state => {
      state.error = null
    },
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
      state.error =  { errorMessage: "Faield to sign up. Check your email and nickname." }
    },
    [loginRequest.pending]: (state, action) => {
      state.loading = true
      state.myInfo = null
    },
    [loginRequest.fulfilled]: (state, action) => {
      state.myInfo = action.payload
      state.loading = false
    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = { errorMessage: "Faield to login. Check your email and password."}
    },
  },
})

export const { closeError } = userSlice.actions

export default userSlice.reducer