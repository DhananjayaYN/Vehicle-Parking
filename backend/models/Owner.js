const mongoose = require('mongoose');


const parkingOwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    parkings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parking'
    }]
});

const ParkingOwner = mongoose.model('ParkingOwner', parkingOwnerSchema);

module.exports = ParkingOwner;