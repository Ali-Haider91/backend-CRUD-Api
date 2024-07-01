const mongoose = require('mongoose');
require('dotenv').config();
// define mongoDB connection
const mongoDB_URI = process.env.DB_URL


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