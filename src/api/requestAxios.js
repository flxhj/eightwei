import request from "../untils/request"
export const getIdent =() => request.get("/ident")
export const addUser =(obj)=>request.post("/regist",obj)
export const userLogin = (obj)=>request.post("/login",obj)
export const getRole = ()=>request.get("/getrole")
