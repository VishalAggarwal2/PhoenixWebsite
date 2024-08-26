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
const addEvent = async (req, res) => {
  try {
    const { title, description, images } = req.body;

    // Check if images is defined and is a string
    if (typeof images !== 'string') {
      return res.status(400).json({ message: 'Invalid images format' });
    }

    // Process comma-separated URLs
    const imageUrlArray = images.split(',').map(url => url.trim());

    // Create the event in the database
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        images: imageUrlArray.join(','), // Store as comma-separated string
      },
    });

    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Error creating event.' });
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, description, images } = req.body;

    // Check if images is defined and is a string
    if (typeof images !== 'string') {
      return res.status(400).json({ message: 'Invalid images format' });
    }

    // Process comma-separated URLs
    const imageUrlArray = images.split(',').map(url => url.trim());

    // Create the blog in the database
    const newBlog = await prisma.blog.create({
      data: {
        title,
        description,
        images: imageUrlArray.join(','), // Store as comma-separated string
      },
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating Blog:', error);
    res.status(500).json({ message: 'Error creating Blog.' });
  }
};


module.exports = {
  createUser,
  getUser,
  joinUs,
  addEvent,
  addBlog,
};