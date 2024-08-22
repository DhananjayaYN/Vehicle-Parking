// const mongoose = require('mongoose');

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