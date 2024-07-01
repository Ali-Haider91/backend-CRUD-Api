const express = require('express');
const app = express();
const CallDB = require('./db.js');
const PersonRoutes = require('./routes/person.routes.js')
const Person = require('./models/person.js')
const bodyparser = require('body-parser');
const menuItem = require('./models/menuItem.js')
const MenuRoutes = require('./routes/menu.routes.js')

app.use(bodyparser.json())
app.use('/person',PersonRoutes)
app.use('/menu',MenuRoutes)
CallDB();

// Middleware function
const logRequest = (req, res, next)=>{
    console.log(`${new Date().toLocaleString()} Request made to ${req.originalUrl}`);
}

app.get('/', logRequest, function(req,res){
    res.send("welocome to hotel")
})


app.listen(8000, ()=>{
    console.log("Server is running");
})

app.get('/', (req,res)=>{
    res.send("hello")
})