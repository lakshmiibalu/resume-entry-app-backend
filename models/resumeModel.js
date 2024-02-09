const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        phnno:{
            type:String,
            required:true
        },
        
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }

    }
)

module.exports = mongoose.model("resume",resumeSchema)