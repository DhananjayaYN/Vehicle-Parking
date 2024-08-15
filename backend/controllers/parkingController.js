const Parking = require('../models/ParkingSlots.js')
const mongoose = require('mongoose')

//get all parkings
const getParkings = async (req, res) => {

    const parkings = await Parking.find({}).sort({createdAt: -1})

    res.status(200).json(parkings)
}

//get a single park by id
const getParking = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such parking'});
    }

    const parking = await Parking.findById(id) 

    if(!parking){
        return res.status(404).json({error: 'No such parking'})
    }

    res.status(200).json(parking)
}

//get parkings by vehicle_type
const getParkingsByVehicle = async (req, res) => {
    const vehicleType = req.query.vehicle_type.toLowerCase();
    
    try{
        console.log(req.query)

        const parkingsByVehicle = await Parking.find({vehicle_type: vehicleType});    

        res.status(200).json(parkingsByVehicle)

    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }

}



//create nw parking
const createParking = async (req, res) => {
    const {name, level, lot_number,vehicle_type, start_time, end_time, availability} = req.body

    //add doc to db
    try{
        const parking = await Parking.create({name, level, lot_number,vehicle_type, start_time, end_time, availability})
        res.status(200).json(parking)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a parking
const deleteParking = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such parking'});
    }

    const parking = await Parking.findOneAndDelete({_id: id}) 

    if(!parking){
        return res.status(404).json({error: 'No such parking'})
    }

    res.status(200).json(parking)

}

//update parking
const updateParking = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such parking'});
    }

    const parking = await Parking.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!parking){
        return res.status(404).json({error: 'No such parking'})
    }

    res.status(200).json(parking)


}



module.exports = {
    getParkings,
    getParking,
    createParking,
    deleteParking,
    updateParking,
    getParkingsByVehicle
}