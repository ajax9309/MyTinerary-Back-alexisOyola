import { Schema,model } from "mongoose";

const tinerarySchema= Schema({
    tinerary: {type: String,required:true, unique:true},
    city:{type: Schema.Types.ObjectId,ref:"city",required:true},
    price: {type: Number, required:true},
    image: {type: String, required:true},
    duration: {type: Number, required:true}
},{
    timestamps:true
})

const Tinerary=model("tinerary", tinerarySchema)

export default Tinerary