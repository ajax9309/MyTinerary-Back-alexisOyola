import { Router } from "express";
import authController from "../controllers/authController.js";
import { singUpSchema } from "../validators/signUpValidator.js";
import validator from "../middlewares/validator.js"


const authRouter=Router()
const {signUp}=authController

authRouter.post("/",validator(singUpSchema),signUp)

export default authRouter