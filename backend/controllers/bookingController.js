const Booking = require('../models/Bookings');
const mongoose = require('mongoose');

const createBooking = async (req, res) => {
    const { customer_id, slot_id, in_time, out_time, price, status } = req.body;
    try {
        const booking = await Booking.create({ customer_id, slot_id, in_time, out_time, price, status });
        res.status(201).json(booking);
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