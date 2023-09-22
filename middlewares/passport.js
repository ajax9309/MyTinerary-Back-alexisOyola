import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY
}

const fn = async (payload, next) => {
    try {
        const user = await User.find({ email: payload.email })
        if (!user) {
            throw new Error("Invalid user email")
        }
        next(null, user)
    } catch (error) {
        next(error, null)
    }

}

export default passport.use(new Strategy(opt, fn));