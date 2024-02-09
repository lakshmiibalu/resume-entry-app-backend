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

router.get("/view",async(req,res)=>{
    let data = await addModel.find()
    res.json(data)
})

module.exports = router
