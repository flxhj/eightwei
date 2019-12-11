import request from "../untils/request"
export const getUserInfo =() => request.get("/title",{
    headers:{
        token:window.localStorage.getItem('token')
    }
})