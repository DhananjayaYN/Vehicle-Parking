const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")
const Parking = require('./ParkingSlots')
const Customer = require('./Customer')

const bookingSchema = new Schema({
    customer_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Customer', 
        required: true 
    },
    slot_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Parking.slots', 
        required: true 
    },
    in_time: { 
        type: Date, 
        required: true
    },
    out_time: { 
        type: Date, 
        required: true 
    },
    booked_on: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        enum: ['Booked', 'Cancelled', 'Completed'],
        default: 'Booked'  // e.g., "Booked", "Cancelled", "Completed"
    }
}, { timestamps: true });
  
  const Booking = mongoose.model('Booking', bookingSchema);
  module.exports = Booking;
  