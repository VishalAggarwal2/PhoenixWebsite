const express = require('express');
const router = express.Router();
const { createUser, getUser, joinUs, addEvent,addBlog,getAllBlogs,getAllEvents,getSubcribers,getJoinUs,deleteBlog,deleteEvent,deleteJoinUs,deleteSubscriber } = require('../controllers/userController');


router.post('/ZXPRLQNUTKaddBlog',addBlog); 
router.post('/ZXPRLQNUTKaddEvent',addEvent); 

router.post('/ZXPRLQNUTKcreate', createUser);

router.get('/ZXPRLQNUTKgetBlogs',getAllBlogs)
router.get('/ZXPRLQNUTKgetEvents',getAllEvents);
router.get('/ZXPRLQNUTKsubscribers',getSubcribers);
router.get('/ZXPRLQNUTKgetJoinUs',getJoinUs);
router.delete('/ZXPRLQNUTKdeleteBlog/:id', deleteBlog);
router.delete('/ZXPRLQNUTKdeleteEvent/:id', deleteEvent);
router.delete('/ZXPRLQNUTKdeleteJoinUs/:id', deleteJoinUs);
router.delete('/ZXPRLQNUTKdeleteSubscribers/:id', deleteSubscriber);
router.post('/joinUs', joinUs);
router.get('/:id', getUser);


module.exports = router;