const mongoose = require("mongoose")

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
    }
  }, { timestamps: true });
  
  const Customer = mongoose.model('Customer', customerSchema);
  module.exports = Customer;
  