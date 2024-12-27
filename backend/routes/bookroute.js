const express=require("express")
const Book =require("../models/Book")

const router=express.Router()

router.post("/add",async (req,res)=>{
    const {userId,title,author, description,price,imageUrl}=req.body
     if(!userId){
        return res.status(400).json({"message":"userId is required. Login first..."})
     }
     try{
        const newBook=new Book({
            userId,title,author,description,price,imageUrl
        })
        await newBook.save()
        res.status(201).json({"message":"book added successfully"})
     }
     catch(error){
        res.status(500).json({"message":"internal server error"})
     }
})

module.exports=router