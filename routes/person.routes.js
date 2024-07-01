const express = require('express')
const router = express.Router();
const Person = require('../models/person.js');
const { ReturnDocument } = require('mongodb');

router.post('/',async(req,res)=>{
    try {
        const newPerson = new Person(req.body)
        const response = await newPerson.save()
        console.log('data saved');
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internal server error'})
    }
})

// get method 

router.get('/',async (req,res)=>{
    try {
        const data = await Person.find()
        console.log('data fetch');
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internal server error'})
    }

})

router.get('/:workType',async(req,res)=>{
    try {
        const workType = req.params.workType
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({work:workType})
            console.log('response fetched data');
            res.status(200).json(response)
        } else {
            res.status(404).json({error:'invalid work type'})
        }
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internel server error'})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id
        const updatePersonData = req.body
        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        })
        console.log('data updated');
        res.status(200).json(response);  
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internel server error'})        
    }

})

router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        console.log('data delete');
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(5000).json({error:'internel server error'})   
    }
})

module.exports = router