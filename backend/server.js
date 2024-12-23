const express =require('express')
const app=express()
const cors=require('cors')
const mongoose =require('mongoose')
const PORT=5000

app.use(express.json())

mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.bb48r.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })




app.get("/",(req,res)=>{
    return res.json({"message":"running on port 5000"})
})

app.listen(PORT,()=>console.log("Server started"))