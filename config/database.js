import mongoose from "mongoose"

let uriLink=
'mongodb+srv://axios:axios@mongodb@cluster0.zfic9rg.mongodb.net/'

mongoose.connect(uriLink)
.then(()=>console.log("DB connected!"))
.catch(err=>console.log(err))


