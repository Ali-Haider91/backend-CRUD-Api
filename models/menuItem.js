const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    isdrink:{
        type:Boolean,
        default:false
    },
    taste:{
        type:String,
        enum:['chicken','mutton','beef']
    }
},{
    timeseries:true

})
const menuItem = mongoose.model('menuItem',menuItemSchema)

module.exports = menuItem

