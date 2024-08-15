const express = require('express');
const {
    createOwner,
    getOwnerById,
    getOwners,
    deleteOwner,
    updateOwner
} = require('../controllers/ownerController');

const router = express.Router();

router.get('/', getOwners);

router.get('/:id', getOwnerById);

router.post('/', createOwner);

router.delete('/:id', deleteOwner);

router.patch('/:id', updateOwner);

module.exports = router;
