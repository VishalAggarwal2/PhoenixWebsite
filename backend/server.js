const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
// Middleware to parse JSON bodies
app.use(express.json());


// Enable CORS with the specified options
app.use(cors());
app.get('/',(req,res)=>{
    res.send("API is running");
})
// Use the user routes
app.use('/api/users', userRoutes);

// Start the server
app.get('/api/test', (req, res) => {
    res.json({ message: 'CORS test successful' });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});