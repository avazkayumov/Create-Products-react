import { createAsyncThunk } from "@reduxjs/toolkit"
import { api }  from "../api"

export const fetchProducts = createAsyncThunk("app/fetchProduct", 
    async () => await api.fetchProducts()
)

export const login = createAsyncThunk("app/login", 
    async (data) => await api.login(data)
)

export const saveProduct = createAsyncThunk("app/saveProduct", 
    async (data) => await api.saveProduct(data)
)

export const signup = createAsyncThunk("app/signup", 
    async (data) => await api.signup(data)
)

export const deleteFunc = createAsyncThunk("app/deleteFunc", 
    async (id) => await api.deleteFunc(id)
)