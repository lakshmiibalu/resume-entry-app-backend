const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const resumeRoute = require("./controller/resumeRoute")

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

//routing
app.use("/api/resume",resumeRoute)

app.listen(3004,()=>{
    console.log("Server Running")
})