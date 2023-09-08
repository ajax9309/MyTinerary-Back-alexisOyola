import { Schema,model } from "mongoose";

const citySchema= Schema({
    name: {type: String, required:true, unique:true},
    tinerary:[{type: Schema.Types.ObjectId,ref:"tinerary"}],
    country: {type: String, required:true},
    language: {type: String, required:true},
    currency: {type: String, required:true},
    image: {type: String, required:true},
    description: {type: String, default:"no description"}
},{
    timestamps:true
})

const City=model("city", citySchema)

export default City