const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true
    },
})