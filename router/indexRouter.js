import { Router, response } from "express";

const indexRouter=Router()

indexRouter.get("/",(response,next)=>{
    Response.send ("welcome to server")
}
)