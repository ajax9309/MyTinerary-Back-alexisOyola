import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import validator from "../middlewares/validator.js"
import { signInSchema } from "../validators/signInValidator.js";
import passport from "../middlewares/passport.js";



const authRouter=Router()
const {signUp,signIn,loginWithToken}=authController

authRouter.post("/signup",validator(signUpSchema),signUp)
authRouter.post("/signin",validator(signInSchema),signIn)
authRouter.get("/signin",validator(signInSchema),signIn)
authRouter.post("/signin/token",passport.authenticate("jwt",{session:false}),loginWithToken)
authRouter.get("/signin/token",passport.authenticate("jwt",{session:false}),loginWithToken)


export default authRouter