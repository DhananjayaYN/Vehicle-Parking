const express = require('express');
const router = express.Router();

const {
    getParkings,
    getParking,
    createParking,
    deleteParking,
    updateParking,
    getParkingsByVehicle,
    getParkingsByName,
    getParkingsPopulated
} = require('../controllers/parkingController');

// Route to get all parkings
router.get('/', getParkings);

// Route to get all parkings with slots populated
router.get('/populated', getParkingsPopulated);

// Route to get a single parking by ID with slots populated
router.get('/:id', getParking);

// Route to create a new parking
router.post('/', createParking);

// Route to delete a parking by ID (and associated slots)
router.delete('/:id', deleteParking);

// Route to update a parking by ID
router.patch('/:id', updateParking);

// Route to get parkings by vehicle type
router.get('/vehicle', getParkingsByVehicle);

// Route to get parkings by name
router.get('/name', getParkingsByName);

module.exports = router;
