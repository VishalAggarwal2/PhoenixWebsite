const express = require('express');
const router = express.Router();
const { createUser, getUser, joinUs, addEvent,addBlog,getAllBlogs,getAllEvents } = require('../controllers/userController');


router.post('/addBlog',addBlog); 
router.post('/addEvent',addEvent); 

router.post('/create', createUser);
router.get('/getBlogs',getAllBlogs)
router.get('/getEvents',getAllEvents);
router.get('/:id', getUser);

router.post('/joinUs', joinUs);
module.exports = router;