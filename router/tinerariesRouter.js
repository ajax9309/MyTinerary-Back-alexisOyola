import { Router } from "express";
import tinerariesController from "../controllers/tinerariesController.js";
const tinerariesRouter=Router()
const {getAllTineraries,getOneTinerary,createOneTinerary,updateOneTinerary,deleteOneTinerary}=tinerariesController

citiesRouter.get("/", getAllTineraries)
citiesRouter.get("/:id", getOneTinerary)
citiesRouter.post("/", createOneTinerary)
citiesRouter.put("/:id", updateOneTinerary)
citiesRouter.delete("/:id", deleteOneTinerary)


export default tinerariesRouter