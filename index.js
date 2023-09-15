import "dotenv/config.js"
import "./config/database.js"
import express, { response } from "express";
import indexRouter from "./router/indexRouter.js";
import cors from "cors"
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

const server=express()

server.use(cors())
server.use(express.json())

server.use("/api",indexRouter)

server.get("/",(request,response,next)=>{
    response.send("Welcome to the server")
})

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env.PORT,()=>{console.log("server running on port "+process.env["PORT"])})
