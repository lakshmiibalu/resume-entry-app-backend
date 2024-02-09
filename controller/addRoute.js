const express = require("express")
const addModel = require("../models/addModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let add = new addModel(data)
    let result = await add.save()
    
    res.json({
        status:"success"
    })

})

module.exports = router