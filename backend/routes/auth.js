const express = require("express")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/User')

const router=express.Router()

router.post("/register",async (req,res)=>{
    const {name,email,password,mobile}=req.body
    try{
        const existingUser = await User.findOne({email})
        if(existingUser) 
            return res.status(400).json({"message":"User already exists"})
        const newUser = new User({name,email,password,mobile})
        await newUser.save()
        res.status(201).json({"message":"User created successfully"})
    }
    catch(e){
        res.status(500).json({"message":"Server error"})
    }
})
module.exports=router