import { Router } from "express";

import citiesRouter from "./citiesRouter.js";
import tinerariesRouter from "./TinerariesRouter.js";
import authRouter from "./authRouter.js";

const indexRouter=Router()

indexRouter.get("/",(request,response,next)=>{
    response.send ("welcome to the server root")
}
)

indexRouter.use("/cities", citiesRouter)
indexRouter.use("/tineraries", tinerariesRouter)
indexRouter.use("/auth", authRouter)

export default indexRouter