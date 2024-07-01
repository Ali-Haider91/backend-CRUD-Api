const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const PersonSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
},{
    timestamps:true
})

const Person    = mongoose.model("Person",PersonSchema);
module.exports = Person 