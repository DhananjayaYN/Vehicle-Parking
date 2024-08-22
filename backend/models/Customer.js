const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    contact_number: {
        type: String,
        require: true,
        unique: true
    },
    bookings: {
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }
  }, { timestamps: true });
  
  const Customer = mongoose.model('Customer', customerSchema);
  module.exports = Customer;
  