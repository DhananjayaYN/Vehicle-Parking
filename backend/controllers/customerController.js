const Customer = require('../models/Customer')
const mongoose = require('mongoose')

const createCustomer = async (req, res) => {
    const { name, email, contact_number } = req.body;
    try {
        const customer = await Customer.create({ name, email, contact_number });
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getCustomerById = async (req, res) => {  
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such customer' });
        }
        const customer = await Customer.findById(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}   

const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, email, contact_number } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such customer' });
        }
        const customer = await Customer.findByIdAndUpdate(id, { name, email, contact_number }, { new: true });
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}   

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such customer' });
        }
        await Customer.findByIdAndRemove(id);
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}   

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}
