import axios from "./axios"
const API ="https://back-twitter.vercel.app/api/" //aqui iria el link de la base de datos
export const registerRequest = user => axios.post("/register", user)
export const loginRequest = user => axios.post("/login", user)
export const verifyTokenRequest = ()=> axios.get("/auth/verify")