const express = require('express');

const {
    createSlot,
    getSlots,
    getSlotById,
    getSlotsByParkingId,
    getSlotsByVehicleTypeAndParkingId,
    getSlotsByVehicleTypeAndParkingName,
    updateSlot,
    deleteSlot
} = require('../controllers/slotsController');

const router = express.Router();

// Route to create a new slot and update the corresponding parking document
router.post('/', createSlot);

// Route to get all slots
router.get('/', getSlots);

// Route to get a slot by its ID
router.get('/:id', getSlotById);

// Route to get slots by parking ID
router.get('/parking/:parking_id', getSlotsByParkingId);

// Route to get slots by vehicle type and parking ID
router.get('/search', getSlotsByVehicleTypeAndParkingId);

// Route to get slots by vehicle type and parking name
router.get('/search/name', getSlotsByVehicleTypeAndParkingName);

// Route to update a slot by its ID
router.put('/:id', updateSlot);

// Route to delete a slot by its ID and remove it from the corresponding parking document
router.delete('/:id', deleteSlot);

module.exports = router;