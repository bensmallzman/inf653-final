const express = require('express');
const router = express.Router()
const Model = require('../model/States');
// const stateData = require('../states.json')

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        stateCode: req.body.stateCode,
        funfacts: req.body.funfacts
    })
    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    } catch (err) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    // res.send('Get All API')
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    // res.send('Get by ID API')
    // res.send(req.params.id)
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`State ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;