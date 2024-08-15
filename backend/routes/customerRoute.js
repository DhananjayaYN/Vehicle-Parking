const express = require('express')
const {
    createCustomer,
    getCustomerById,
    getCustomers,
    deleteCustomer,
    updateCustomer
} = require('../controllers/customerController')

const router = express.Router()

router.get('/', getCustomers)

router.get('/:id', getCustomerById)

router.post('/', createCustomer)

router.delete('/:id', deleteCustomer)

router.patch('/:id', updateCustomer)

module.exports = router

