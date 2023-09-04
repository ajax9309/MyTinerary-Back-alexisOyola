import { Schema,model } from "mongoose";

const tinerarySchema= Schema({
    
    price: {type: Number, required:true},
    image: {type: String, required:true},
    duration: {type: Number, required:true},
    comments: {type: String, required:true}
},{
    timestamps:true
})

const Tinerary=model("tinerary", tinerarySchema)

export default Tinerary