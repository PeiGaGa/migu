import axios from "axios"
export default {
   async music({commit}){
    let data=await axios.get("/product/recommend?f=json&pageSize=60&pageNo=1&contentType=20&picType=11002")
       commit("musicAdd",data.data.list)
       console.log(data.data.list)
    }
}