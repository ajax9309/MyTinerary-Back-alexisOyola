import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter=Router()
const {getAllCities,getOneCities,createOneCity,updateOneCity,deleteOneCity}=citiesController

citiesRouter.get("/", getAllCities)
citiesRouter.post("/", createOneCity)
citiesRouter.get("/:id", getOneCities)
citiesRouter.put("/:id", updateOneCity)
citiesRouter.delete("/:id", deleteOneCity)


export default citiesRouter