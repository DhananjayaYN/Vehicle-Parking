const Slot = require('../models/Slots');
const Parking = require('../models/ParkingSlots');
// const Parking = require('../models/Parkings');
const mongoose = require('mongoose');

const createSlot = async (req, res) => {
    const { parking_id, level, lot_number, vehicle_type, availability} = req.body;
    try {
        // Check if a slot with the same parking_id, level, lot_number, and vehicle_type already exists
        const existingSlot = await Slot.findOne({ parking_id, level, lot_number, vehicle_type});

        if (existingSlot) {
            return res.status(400).json({ error: 'A slot with the same parking ID, level, lot number, and vehicle type already exists' });
        }

        const parking = await Parking.findById(parking_id);

        if (!parking) {
            return res.status(400).json({ error: 'Parking lot not found' });
        }


        const slot = await Slot.create({ parking_id, level, lot_number, vehicle_type, availability });

        const parkingUpdated = await Parking.findByIdAndUpdate(parking_id, { $push: { slots: slot._id } }, { new: true, useFindAndModify: false });


        res.status(201).json({
            message: 'Slot created and added to parking lot successfully',
            slot,
            parkingUpdated
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getSlots = async (req, res) => {
    try {
        const slots = await Slot.find();
        res.status(200).json(slots);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getSlotById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such slot' });
        }
        const slot = await Slot.findById(id);
        res.status(200).json(slot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSlotsByVehicleTypeAndParkingId = async (req, res) => {
    const { parkingId, vehicle_type } = req.query; 

    try {

        const parking = await Parking.findById(parkingId).populate({
            path: 'slots',
            match: { vehicle_type: vehicle_type.toLowerCase() }, // Filter by vehicle type
        });

        if (!parking) {
            return res.status(404).json({ error: 'Parking lot not found' });
        }

        // Step 2: Respond with the slots that match the vehicle type
        res.status(200).json(parking.slots);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSlotsByVehicleTypeAndParkingName = async (req, res) => {
    const { name, vehicle_type } = req.query;

    parkingName = name.toLowerCase();
    vehicle_type_in_lower_case = vehicle_type.toLowerCase();

    console.log(parkingName, vehicle_type_in_lower_case);

    try{
        const parking = await Parking.findOne({name: parkingName});

        if(!parking){
            return res.status(404).json({error: 'Parking lot not found'});
        }

        const slots = await Slot.find({parking_id: parking._id, vehicle_type: vehicle_type_in_lower_case});

        if(slots.length === 0){
            return res.status(404).json({error: 'No slots found for this vehicle type'});
        }

        res.status(200).json(slots);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getSlotsByParkingId = async (req, res) => {
    const { parking_id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(parking_id)) {
            return res.status(404).json({ error: 'Invalid Parking ID' });
        }

        const slots = await Slot.find({ parking_id });

        if (!slots || slots.length === 0) {
            return res.status(404).json({ error: 'No slots found for this parking lot' });
        }
        res.status(200).json(slots);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateSlot = async (req, res) => {
    const { id } = req.params;
    const { parking_id, level, lot_number, vehicle_type, availability } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such slot' });
        }
        const slot = await Slot.findByIdAndUpdate(id, { parking_id, level, lot_number, vehicle_type, availability }, { new: true });
        res.status(200).json(slot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSlot = async (req, res) => {
    const { id } = req.params;
    try {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such slot' });
        }

        const slot = await Slot.findById(id);

        if(!slot){
            return res.status(404).json({error: 'No such slot'});
        }

        const parking = await parking.findByIdAndUpdate(
            slot.parking_id,
            { $pull: { slots: id } },
            { new: true, useFindAndModify: false }
        );

        if(!parking){
            return res.status(404).json({error: 'Parking lot not found'});
        }

        await Slot.findByIdAndRemove(id);

        res.status(200).json({
            message: 'Slot deleted successfully and removed from parking lot',
            parking
        });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSlot,
    getSlots,
    getSlotById,
    getSlotsByParkingId,
    getSlotsByVehicleTypeAndParkingId,
    getSlotsByVehicleTypeAndParkingName,
    updateSlot,
    deleteSlot
}