const mongoose = require("mongoose")

const addSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        education:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        project:{
            type:String,
            required:true
        },
        extracurricular:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("adds",addSchema)