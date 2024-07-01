const express = require('express')
const router = express.Router();
const menuItem = require('../models/menuItem.js')

router.post('/',async(req,res)=>{
    try {
        const newMenuItem = new menuItem(req.body)
        const resMenu = await newMenuItem.save()
        console.log("menu item save data");
        res.status(200).json(resMenu);
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internal server error'})
    }
})
router.get('/',async(req,res)=>{
    try {
        const getMenu = await menuItem.find()
        console.log('get menu data');
        res.status(200).json(getMenu)
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internel server error'})
    }
})

router.get('/:tasteType',async(req,res)=>{
 try {
       const tasteType= req.params.tasteType
       if (tasteType == 'mutton'  || tasteType == 'beef' || tasteType == 'chicken') {
        const response = await menuItem.find({taste:tasteType})
        res.status(200).json(response)
        console.log('menu-type fetch data');
       } else {
        res.status(404).json({error:'invalid taste type'})
       }
 } catch (error) {
    console.log(error);
    res.status(404).json({error:'internel server error'})
    
 } 
})


module.exports = router