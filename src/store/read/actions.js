import axios from "axios"
export default {
   async read({commit}){
    let data=await axios.get("/read/jrxm.html?f=json")
       commit("readAdd",data.data.modualVOList[0].columnList.miguBookList)
       console.log(data.data.modualVOList[0].columnList.miguBookList)
    }
}