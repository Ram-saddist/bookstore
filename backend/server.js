const express =require('express')
const app=express()
const cors=require('cors')
const mongoose =require('mongoose')
const PORT=5000
const authRoutes=require("./routes/auth")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.0u7y0h0.mongodb.net/mystore?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
app.use("/api/auth",authRoutes)


app.get("/",(req,res)=>{
    return res.json({"message":"running on port 5000"})
})

app.listen(PORT,()=>console.log("Server started"))