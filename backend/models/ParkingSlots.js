const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const Schema = mongoose.Schema

// const slotSchema = new Schema({
//     lot_number: {
//         type: String,
//         required: true
//     },
//     vehicle_type: {
//         type: String,
//         enum: [
//             'car',
//             'bike',
//             'threewheel'
//         ],
//         required: true
//     },
//     availability: { 
//         type: Boolean, 
//         default: true // whether the slot is available or not
//     },

// })

// const levelSchema = new Schema({
//     level: {
//         type: String, 
//         required: true
//     },
//     slots: [slotSchema]
// })

// const parkingSchema = new Schema({
//     owner_id: {
//         type: Schema.Types.ObjectId,
//         ref: 'Owner',
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     levels: [levelSchema],
//     open_times: [{
//         day: { 
//             type: Date, 
//         },
//         dates: {
//             type: String,
//             enum: [
//                 'monday',
//                 'tuesday',
//                 'wednesday',
//                 'thursday',
//                 'friday',
//                 'saturday',
//                 'sunday'
//             ],
//             required: true
//         },
//         times: [{
//             start_time: { type: String, required: true },
//             end_time: { type: String, required: true },
//         }],
//     }],
    
// }, { timestamps: true })

const parkingSchema = new Schema({
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    slots: [{
        type: Schema.Types.ObjectId,
        ref: 'Slots',
        // required: true
    }],  
    open_times: [{
        day: { 
            type: Date, 
        },
        dates: [{
            type: String,
            enum: [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday',
                'weekdays',
                'weekends',
                'everyday', 
            ],
            required: true
        }],
        times: [{
            start_time: { type: String, required: true },
            end_time: { type: String, required: true },
        }],
    }],
    
}, { timestamps: true })

module.exports = mongoose.model('Parking', parkingSchema)
