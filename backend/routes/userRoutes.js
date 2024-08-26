const express = require('express');
const router = express.Router();
const { createUser, getUser, joinUs, addEvent,addBlog } = require('../controllers/userController');




router.post('/addBlog'); 
router.post('/addEvent'); 

router.post('/create', createUser);
router.get('/:id', getUser);

router.post('/joinUs', joinUs);



module.exports = router;