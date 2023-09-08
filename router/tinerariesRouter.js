import { Router } from "express";
import tinerariesController from "../controllers/tinerariesController.js";
const tinerariesRouter=Router()
const {getAllTineraries,getOneTinerary,createOneTinerary,updateOneTinerary,deleteOneTinerary}=tinerariesController

tinerariesRouter.get("/", getAllTineraries)
tinerariesRouter.get("/:id", getOneTinerary)
tinerariesRouter.post("/", createOneTinerary)
tinerariesRouter.put("/:id", updateOneTinerary)
tinerariesRouter.delete("/:id", deleteOneTinerary)


export default tinerariesRouter