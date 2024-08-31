const express = require('express');
const router = express.Router();
const { createUser, getUser, joinUs, addEvent,addBlog,getAllBlogs,getAllEvents,getSubcribers,getJoinUs,deleteBlog,deleteEvent,deleteJoinUs,deleteSubscriber } = require('../controllers/userController');


router.post('/addBlog',addBlog); 
router.post('/addEvent',addEvent); 

router.post('/create', createUser);
router.get('/getBlogs',getAllBlogs)
router.get('/getEvents',getAllEvents);
router.get('/subscribers',getSubcribers);
router.get('/getJoinUs',getJoinUs);
router.delete('/deleteBlog/:id', deleteBlog);
router.delete('/deleteEvent/:id', deleteEvent);
router.delete('/deleteJoinUs/:id', deleteJoinUs);
router.delete('/deleteSubscribers/:id', deleteSubscriber);

router.get('/:id', getUser);

router.post('/joinUs', joinUs);
module.exports = router;