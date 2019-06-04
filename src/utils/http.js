import axios from "axios"
const http = axios.create({
    timeout:5000,
    withCredentials:true
})

http.interceptors.request.use(()=>{})