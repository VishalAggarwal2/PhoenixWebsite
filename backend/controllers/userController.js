const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const createUser = async (req, res) => {
  try {
    const {email} = req.body;
    const newUser = await prisma.user.create({
      data: {
        email
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  } finally {
    await prisma.$disconnect();
  }
};


const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  } finally {
    await prisma.$disconnect();
  }
};

const joinUs = async (req, res) => {
  const { name, email } = req.body;

  try {
    
    const newUser = await prisma.joinUs.create({
      data: {
        name,
        email,
      },
    });
  
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user.' });
  }
}

const addEvent = async (req, res) =>{
  console.log("Hello")
  const { eventName, eventInfo,images } = req.body;

  if (!eventName || !eventInfo) {
      return res.status(400).json({ error: 'Event name and event info are required.' });
  }

  try {
      const eventSample = await prisma.event_new.create({
          data: {
              title: eventName,
              description: eventInfo,
              images:images,
          },
      });
      console.log("Hello world")
      res.status(201).json(eventSample);
  } catch (error) {
      console.error('Error creating Event:', error);
      res.status(500).json({ error: 'Internal server error' });
  }


}

const addBlog = async (req, res) =>{
  
  const { blogName, blogInfo,images } = req.body;

  if (!blogName || !blogInfo) {
      return res.status(400).json({ error: 'Event name and event info are required.' });
  }

  try {
      const newBlog = await prisma.blog.create({
          data: {
              title: blogName,
              description: blogInfo,
              images:images,
          },
      });

      res.status(201).json(newBlog);
  } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany(); // Fetch all blogs from the blog table
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createUser,
  getUser,
  joinUs,
  addEvent,
  addBlog,
  getAllBlogs,
};