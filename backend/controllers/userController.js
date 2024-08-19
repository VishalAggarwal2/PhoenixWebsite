const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
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

// Get a user by ID
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

module.exports = {
  createUser,
  getUser,
  joinUs,
};