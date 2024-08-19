const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running");
})
// Use the user routes
app.use('/api/users', userRoutes);

// Start the server


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});