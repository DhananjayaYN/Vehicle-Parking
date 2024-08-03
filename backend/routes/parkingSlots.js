const express = require('express')
const {
    createParking,
    getParking,
    getParkings,
    deleteParking,
    updateParking,
    getParkingsByVehicle
} = require('../controllers/parkingController')

const router = express.Router()

//get all parkings
// router.get('/', getParkings)

//get parkings by id
router.get('/:id', getParking)

router.get('/', getParkingsByVehicle)

//post new parking
router.post('/', createParking)

router.delete('/:id', deleteParking)

router.patch('/:id', updateParking)

module.exports = router