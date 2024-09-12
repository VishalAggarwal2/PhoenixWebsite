const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
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
      where: { id }, // For MongoDB, 'id' is a string (ObjectId), so no need to parse it to an integer
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
  const { name, email, phone } = req.body;

  try {
    const newUser = await prisma.joinUs.create({
      data: {
        name,
        email,
        phone,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user.' });
  }
};

const addEvent = async (req, res) => {
  const { eventName, eventInfo, images } = req.body;

  if (!eventName || !eventInfo) {
    return res.status(400).json({ error: 'Event name and event info are required.' });
  }

  try {
    const eventSample = await prisma.event_new.create({
      data: {
        title: eventName,
        description: eventInfo,
        images: images,
      },
    });
    res.status(201).json(eventSample);
  } catch (error) {
    console.error('Error creating Event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addBlog = async (req, res) => {
  const { blogName, blogInfo, images } = req.body;

  if (!blogName || !blogInfo) {
    return res.status(400).json({ error: 'Blog name and blog info are required.' });
  }

  try {
    const newBlog = await prisma.blog.create({
      data: {
        title: blogName,
        description: blogInfo,
        images: images,
      },
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event_new.findMany();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await prisma.user.findMany();
    res.status(200).json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getJoinUs = async (req, res) => {
  try {
    const joinUsData = await prisma.joinUs.findMany();
    res.status(200).json(joinUsData);
  } catch (error) {
    console.error("Error fetching join us data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { id }, // No need to parse `id` as it's a string
    });

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    await prisma.blog.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Blog deleted successfully.' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await prisma.event_new.findUnique({
      where: { id },
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    await prisma.event_new.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteJoinUs = async (req, res) => {
  const { id } = req.params;

  try {
    const joined = await prisma.joinUs.findUnique({
      where: { id },
    });

    if (!joined) {
      return res.status(404).json({ message: 'JoinUs entry not found.' });
    }

    await prisma.joinUs.delete({
      where: { id },
    });

    res.status(200).json({ message: 'JoinUs entry deleted successfully.' });
  } catch (error) {
    console.error('Error deleting JoinUs entry:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteSubscriber = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubscriber = await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Subscriber deleted successfully.', deletedSubscriber });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    res.status(500).json({ message: 'An error occurred while deleting the subscriber.' });
  }
};

module.exports = {
  createUser,
  getUser,
  joinUs,
  addEvent,
  addBlog,
  getAllBlogs,
  getAllEvents,
  getSubscribers,
  getJoinUs,
  deleteBlog,
  deleteEvent,
  deleteJoinUs,
  deleteSubscriber,
};
