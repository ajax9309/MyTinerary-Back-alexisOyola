import mongoose from "mongoose"

let uriLink=process.env.DB_STRING
mongoose.connect(uriLink)
.then(()=>console.log("DB connected!"))
.catch(err=>console.log(err))


