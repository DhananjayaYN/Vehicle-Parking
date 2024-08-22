const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")
const Parking = require('./ParkingSlots')
const Customer = require('./Customer')

const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    customer_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Customer', 
    },
    parking_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Parking', 
        required: true
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    }, 
    contact_number1: {
        type: String,
        required: true
    },
    contact_number2: {
        type: String,
        required: true
    },
    amount_paid: {
        type: Number,
        required: true
    },
    booking_type: {
        type: String,
        enum: ['single', 'multiple'],
        required: true
    },
    vehicle_number: { 
        type: String, 
        required: true 
    },
    vehicle_type: { 
        type: String, 
        required: true 
    },
    bookings:[{
        date: { 
            type: Date, 
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
        slot_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Slot', 
            required: true 
        },
        slot_number: { 
            type: String, 
            required: true
        }
    }],
    order_date: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        enum: ['booked', 'cancelled', 'completed', 'payment failed', 'payment pending'],
        default: 'booked'  // e.g., "Booked", "Cancelled", "Completed"
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
