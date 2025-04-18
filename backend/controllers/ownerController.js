const { ca } = require('date-fns/locale');
const ParkingOwner = require('../models/Owner');
const Parking = require('../models/ParkingSlots');
const mongoose = require('mongoose');

const createOwner = async (req, res) => {
    const {
        company_name,
        name,
        email,
        phone_number,
        open_time,
        address,
        vehicle_types,
        vehicle_charging_fees,
        bank_details
    } = req.body;
    // const { name, contactNumber, email, parkings } = req.body;

    try {
        const owner = await ParkingOwner.create({
            company_name,
            name,
            email,
            phone_number,
            open_time,
            address,
            vehicle_types,
            vehicle_charging_fees,
            bank_details
        });
        // const owner = await ParkingOwner.create({ name, contactNumber, email, parkings });
        res.status(201).json(owner);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

const getOwnerById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such owner' });
    }

    try {
        const owner = await ParkingOwner.findById(id);
        
        if (!owner) {
            return res.status(404).json({ error: 'No such owner' });
        }

        res.status(200).json(owner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOwners = async (req, res) => {
    // console.log('getOwners');
    try{
        const owners = await ParkingOwner.find();
        res.status(200).json(owners) 
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateOwner = async (req, res) => {
    const { id } = req.params;
    const {
        company_name,
        name,
        email,
        phone_number,
        open_time,
        address,
        vehicle_types,
        vehicle_charging_fees,
        bank_details
    } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such owner' });
        }

        const owner = await ParkingOwner.findByIdAndUpdate(
            id, // specify the document ID to update
            {
                company_name,
                name,
                email,
                phone_number,
                open_time,
                address,
                vehicle_types,
                vehicle_charging_fees,
                bank_details
            },
            { new: true } // return the updated document
        );

        if (!owner) {
            return res.status(404).json({ error: 'No such owner' });
        }

        res.status(200).json(owner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


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

        res.status(200).json({ message: "Owner deleted successfully "}, owner)
        
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
