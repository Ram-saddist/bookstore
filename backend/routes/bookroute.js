const express=require("express")
const Book =require("../models/Book")

const router=express.Router()

router.get("/books",async(req,res)=>{
   try{
      const books=await Book.find()
      res.status(200).json(books)
   }
   catch(error){
      res.status(500).json({"message":"error while fetching books data"})
   }
})

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