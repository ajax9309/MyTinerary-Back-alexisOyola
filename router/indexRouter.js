import { Router, request, response } from "express";

import citiesController from "../controllers/citiesController.js";

const indexRouter=Router()
const {getAllCities,getOneCities}=citiesController
indexRouter.get("/",(request,response,next)=>{
    response.send ("welcome to the server root")
}
)

indexRouter.get("/cities", getAllCities)
indexRouter.get("/cities/one", getOneCities)

export default indexRouter