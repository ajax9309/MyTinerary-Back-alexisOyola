import express, { response } from "express";
import indexRouter from "./router/indexRouter.js";

const server=express()

server.use("/api",indexRouter)
server.get("/",(request,response,next)=>{
    response.send("Welcome to the server")
})


server.listen(3000,()=>{console.log("server running on port 3000")})
