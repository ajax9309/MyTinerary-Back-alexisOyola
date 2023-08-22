import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter=Router()
const {getAllCities,getOneCities,createOneCity}=citiesController

citiesRouter.get("/", getAllCities)
citiesRouter.get("/:City", getOneCities)
citiesRouter.post("/", createOneCity)
export default citiesRouter