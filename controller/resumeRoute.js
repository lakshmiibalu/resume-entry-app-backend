const express = require("express")
const resumeModel = require("../models/resumeModel")

const router = express.Router()
const bcrypt = require("bcryptjs")
hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{

    let {data} = {"data":req.body}
    let password = data.password
    console.log(password)
    const hashedPassword = await hashPasswordGenerator(password)
    data.password = hashedPassword
    let resume = new resumeModel(data)
    let result = await resume.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports = router