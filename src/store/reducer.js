import { createSlice } from '@reduxjs/toolkit'
import { deleteFunc, fetchProducts, login } from './actions'

const initialState = {
    products: [],
    auth: Boolean(localStorage.getItem("token")),
    username: localStorage.getItem("username"),
    token: localStorage.getItem("token"),
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = false
      state.username = null
      state.token = null

      localStorage.removeItem("username")
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = true
      state.username = action.payload.user.username
      state.token = action.payload.token

      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("username", action.payload.user.username)
    })

    builder.addCase(deleteFunc.fulfilled, (state, action) => {
      
    });
  }
})

export const { logout } = appSlice.actions 
export default appSlice.reducer