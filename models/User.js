import { Schema,model } from "mongoose";

const userSchema= Schema({
    username: {type: String, required:true},
    email: {type: String, required:true},
    password:{type: String, required:true},
    country: {type: String},
    picture: {type: String, default:"https://i.pinimg.com/564x/05/98/7a/05987a478245230348a64d7565679c0c.jpg"},
    birthdate:{type:Date},
    cellphone:{type:Number}
},{
    timestamps:true
})

const User=model("user", userSchema)

export default  User