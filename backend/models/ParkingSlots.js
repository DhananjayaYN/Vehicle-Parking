const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const parkingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    lot_number:{
        type: String,
        required: true
    },
    vehicle_type:{
        type: String,
        required: true
    },
    start_time:{
        type: String,
        required: true
    },
    end_time:{
        type: String,
        required: true
    },
    availability:{
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Parking', parkingSchema)
