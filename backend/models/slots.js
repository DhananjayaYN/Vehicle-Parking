const mongoose = require("mongoose")
const Booking = require("./Bookings")
// const Parking = require("./Parking")

const Schema = mongoose.Schema;

const slotSchema = new Schema({
    parking_id: {
        type: Schema.Types.ObjectId,
        ref: 'Parking',
        required: true
    },
    level: {
        type: String, 
        required: true
    },
    lot_number: {
        type: String,
        required: true
    },
    vehicle_type: {
        type: String,
        enum: [
            'car',
            'bike',
            'threewheel',
            'other'
        ],
        required: true
    },
    availability: { 
        type: Boolean, 
        default: true // whether the slot is available or not
    },
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }]

}, {timestamps: true})

module.exports = mongoose.model('Slot', slotSchema)