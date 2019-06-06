import axios from "axios"
const serve = axios.create({
    timeout:5000,
    withCredentials:true
})

serve.interceptors.request.use((config)=>{
    if (config.method=="post") {
        config.data=config.data;
    } else if(config.method=="get"){
        config.params = {...config.data}
    }
    return config;
},(e)=>{
    Promise.reject(e)
})

serve.interceptors.response.use((config)=>{
    if (res.status == 200) {
        return res.data
    }
},(e)=>{
    return Promise.reject(e)
})



export const http = (method,url,data={})=>{
    if(method=="get"){
        return serve.get(url,{params:data})
    }else if(method=="post"){
        return serve.post(url,data);
    }else{
        return;
    }
}