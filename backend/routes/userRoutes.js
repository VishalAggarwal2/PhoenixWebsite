const express = require('express');
const router = express.Router();
const { createUser, getUser,joinUs } = require('../controllers/userController');

// Route to create a new user
router.post('/create', createUser);

// Route to get a user by ID


router.post('/joinUs', joinUs);
router.post('/:id', getUser);

module.exports = router;