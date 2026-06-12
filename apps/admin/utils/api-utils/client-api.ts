import axios from "axios"

const baseApi = axios.create({
  withCredentials: true,
})

baseApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export const authApi = baseApi.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
})

export const productApi = baseApi.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCT_URL,
})
