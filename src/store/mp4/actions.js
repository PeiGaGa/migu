import axios from "axios"
export default {
   async mp4({commit}){
    let data=await axios.get("/product/recommend?f=json&pageSize=60&pageNo=1&contentType=30&picType=13002")
       commit("mp4Add",data.data.list)
       console.log(data.data.list)
    }
}