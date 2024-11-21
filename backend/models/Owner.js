const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// const parkingOwnerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     contactNumber: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     parkings: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Parking'
//     }]
// });

const parkingOwnerSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        address_line_1: {
            type: String,
            required: true
        },
        address_line_2: {
            type: String
        },
        district: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            required: true
        }
    },
    open_time: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    },
    vehicle_types: {
        car: {
            type: Boolean,
            required: true
        },
        bike: {
            type: Boolean,
            required: true
        },
        threewheel: {
            type: Boolean,
            required: true
        },
        other: {
            type: Boolean,
            default: false
        }
    },
    vehicle_charging_fees: {
        car: {
            type: Number,
            required: true
        },
        bike: {
            type: Number,
            required: true
        },
        threewheel: {
            type: Number,
            required: true
        },
        other: {
            type: Number,
            default: 0
        }
    }, 
    bank_details: {
        bank_name: {
            type: String,
            required: true
        },
        branch_name: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        account_number: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

const ParkingOwner = mongoose.model('ParkingOwner', parkingOwnerSchema);

module.exports = ParkingOwner;