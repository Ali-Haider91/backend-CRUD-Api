const mongoose = require('mongoose')

// define mongoDB connection
const mongoDB_URI = 'mongodb+srv://mblowingprince:miSrOsDGEEuKrZAO@cluster0.sljwyyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// setup a MongoDB Connection
const ConnectDB = async ()=>{
    try {
        await mongoose.connect(mongoDB_URI)
        console.log(`MongoDb Atlas Successfully connected`);
    } catch (error) {
        console.log(`Error occur MongoDb Atlas`,error); 
    }
}

module.exports = ConnectDB;