const express = require('express')
const {
    createBooking,
    getBookingById,
    getBookings,
    deleteBooking,
    updateBooking,
    getBookingsByParkingIdAndVehicleTypeAndDateAndTime
} = require('../controllers/bookingController')

const router = express.Router()

router.get('/filter', getBookingsByParkingIdAndVehicleTypeAndDateAndTime)

router.get('/', getBookings)

router.get('/:id', getBookingById)

router.post('/', createBooking)

router.delete('/:id', deleteBooking)

router.patch('/:id', updateBooking)


module.exports = router
