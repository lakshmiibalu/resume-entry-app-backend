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

router.post("/signin",async(req,res)=>{
    let input = req.body
    let email = req.body.email
    let data = await resumeModel.findOne({"email":email})

    if (!data) {

        return res.json({
            status:"invalid user"
        })

    }

    let dbPassword = data.password
    let inputPassword = req.body.password

    console.log(dbPassword)
    console.log(inputPassword)

    const match = await bcrypt.compare(inputPassword,dbPassword)
    if (!match) {

        return res.json({
            status:"incorrect password"
        })
        
    }

    res.json({
        status:"success"
    })
})

module.exports = router