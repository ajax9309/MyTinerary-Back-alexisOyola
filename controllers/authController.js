import User from "../models/User.js"
import brypt from "bcryptjs"
import jwt from "jsonwebtoken"

const authController = {

  signUp: async (req, res, next) => {
    try {

      const passwordHash = brypt.hashSync(req.body.password, 5)
      let body = { ...req.body }
      body.password = passwordHash

      const emailexists = await User.findOne({ email: req.body.email })
      if (!emailexists) {
        const newUser = await User.create(body)

        const token = jwt.sign({ id:newUser.id, email:newUser.email, name:newUser.name, picture:newUser.picture }, process.env.SECRETKEY, { expiresIn: "1h" })

        return res.status(201).json({
          success: true,
          userdata: newUser,
          token:token,
          message: "User registered"
        })
      }
      return res.status(400).json({
        success: false,
        message: "User already exist"
      })

    } catch (error) {
      console.log(error);
      next(error)
    }
  },


  signIn: async (req, res, next) => {

    try {

      let { email: emailBody, password } = req.body
      const userExists = await User.findOne({ email: emailBody })

      if (!userExists) {
        throw new Error("No user exists with this email")
      }

      let passwordValidated = brypt.compareSync(password, userExists.password)

      if (!passwordValidated) {
        throw new Error("Invalid Email or Password!")
      }

      let { id, name, email, picture } = userExists
      const token = jwt.sign({ id, email, name, picture }, process.env.SECRETKEY, { expiresIn: "1h" })

      return res.status(200).json({
        success: true,
        userData: { id, name, email, picture },
        token: token,
        message: "Login successfully!"
      })

    } catch (error) {
      console.log(error);
      next(error)
    }
  },

  loginWithToken: (req, res) => {
    console.log(req);
    res.json({ success: true })

  }


}



export default authController