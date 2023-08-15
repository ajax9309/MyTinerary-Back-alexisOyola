import express, { response } from "express";

const server=express()

server.get("/",(request,response,next)=>{
    response.send("Welcome to the server")
})
server.listen(3000,()=>{console.log("server running on port 3000")})
