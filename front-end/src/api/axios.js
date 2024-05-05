import axios from "axios"

const instance = axios.create({
    baseURL: "https://back-twitter.vercel.app/api/",
    withCredentials: true
})
export default instance