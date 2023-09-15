import User from "../models/User.js"
import brypt from "bcryptjs"

const authController={
  signUp:async(req,res,next)=>{
    try {
        const passwordHash=brypt.hashSync(req.body.password,5)
        let body={...req.body}
        body.password= passwordHash

        const emailexists=await User.findOne({email:res.body.email})
        if (!emailexists){
        const newUser=await User.create(body)
        const equal=brypt.compareSync(res.body.password, passwordHash)
        console.log(equal);
        
        return res.status(201).json({
            success:true,
            userdata:newUser,
            message:"User registered"
          })
        }
        return res.status(400).json({
          success:false,
          message:"User already exist"
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
  }  
}

export default authController