const { ca } = require('date-fns/locale');
const ParkingOwner = require('../models/Owner');
const Parking = require('../models/ParkingSlots');
const mongoose = require('mongoose');

const createOwner = async (req, res) => {
    const { name, contactNumber, email, parkings } = req.body;

    try {
        const owner = await ParkingOwner.create({ name, contactNumber, email, parkings });
        res.status(201).json(owner);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

const getOwnerById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such owner'});
    }

    const owner = await ParkingOwner.findById(id).populate('parkings');

    if(!owner){
        return res.status(404).json({error: 'No such owner'})
    }
    
    try{
        res.status(200).json(owner)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getOwners = async (req, res) => {

    try{
        const owners = await ParkingOwner.find().populate('parkings');
        res.status(200).json(owners) 
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateOwner = async (req, res) => {
    const { id } = req.params;
    const { name, contactNumber, email, parkings } = req.body;


    try{
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such owner'});
        }
    
        const owner = await ParkingOwner.findByIdAndUpdate(id, { name, contactNumber, email, parkings }, { new: true });

        res.status(200).json(owner)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteOwner = async (req, res) => {
    const { id } = req.params;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such owner id'});
        }
    
        const owner = await ParkingOwner.findByIdAndDelete(id);

        if(!owner){
            return res.status(404).json({error: 'No such owner'})
        }

        res.status(200).json({ message: "Owner deleted successfully "} + owner)
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createOwner,
    getOwnerById,
    getOwners,
    updateOwner,
    deleteOwner
};
