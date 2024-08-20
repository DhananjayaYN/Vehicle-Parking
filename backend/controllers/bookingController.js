const Booking = require('../models/Bookings');
const Slot = require('../models/Slots');
const mongoose = require('mongoose');

const createBooking = async (req, res) => {
    // const { customer_id, slot_id, in_time, out_time, price, status } = req.body;
    const { customer_id, parking_id, customer_name, 
        customer_email, contact_number1, contact_number2, 
        amount_paid, booking_type, vehicle_number, vehicle_type, bookings, order_date, status } = req.body;

    const slot_ids = bookings.map(booking => booking.slot_id);
    const slot_numbers = bookings.map(booking => booking.slot);
    
    try {
        
        const slots = await Slot.find({ _id: { $in: slot_ids } });

        if (slots.length !== slot_ids.length) {
            const invalidIds = slot_ids.filter(id => !slots.some(slot => slot._id.equals(id)));
            return res.status(404).json({ error: `Invalid Slot IDs: ${invalidIds.join(', ')}` });
        }

        for (const slot of slots) {
            if (!slot.availability) {
                return res.status(400).json({ error: `Slot ID ${slot._id} is not available.` });
            }
        }

        const booking = await Booking.create({ 
            customer_id, 
            parking_id, 
            customer_name, 
            customer_email, 
            contact_number1, 
            contact_number2, 
            amount_paid, 
            booking_type, 
            vehicle_number, 
            vehicle_type, 
            bookings, 
            order_date, 
            status 
        });

        const updated_slots = await Slot.updateMany (
            { _id: { $in: slot_ids } }, 
            { $push: {bookings: booking._id} }
        );
        
        res.status(201).json({message: 'New Booking Added Successfully',booking, updated_slots});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getBookings = async(req, res) => {
    try {
        const bookings = await Booking.find().populate('customer_id');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getBookingById = async(req, res) => {
    const { id } = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such booking' });
        }
        const booking = await Booking.findById(id).populate('customer_id');
        res.status(200).json(booking);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

const updateBooking = async(req, res) => {
    const { id } = req.params;
    const { customer_id, slot_id, in_time, out_time, price, status } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such booking' });
        }
        const booking = await Booking.findByIdAndUpdate(id, { customer_id, slot_id, in_time, out_time, price, status }, { new: true });
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBooking = async(req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such booking' });
        }
        await Booking.findByIdAndRemove(id);
        res.status(200).json({ message: 'Booking deleted successfully' });
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
};