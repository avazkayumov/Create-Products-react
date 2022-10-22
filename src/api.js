import axios from "axios"
import { toast } from "react-toastify"

axios.defaults.baseURL = "http://142.93.246.144"

class Api {
    async fetchProducts () {
        try {
            const result = await axios.get("/products")
            return result.data
        }catch(err) {
            console.log(err)
        }
    }

    async login (data) {
        try {
            const result = await axios.post("/login", data)
            return result.data
        }catch(err) {
            toast.error(err.response.data.message)
        }
    }

    async saveProduct (data) {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data" 
                }
            }
            const result = await axios.post("/product", data, config)
            return result.data
        }catch(err) {
            toast.error(err.response.data.message)
        }
    }

    async signup (data) {
        try {
            const result = await axios.post("/signup", data)
            return result.data
        }catch(err) {
            toast.error(err.response.data.message)
        }
    }

    async deleteFunc (id) {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token") 
                }
            }
            const result = await axios.delete(`products/${id}`, config)
            return result.data
        }catch(err) {
            toast.error(err.response.data.message)
        }
    }
}

export const api = new Api()