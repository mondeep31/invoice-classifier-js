// server.js (or app.js, depending on your structure)
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes')

// Load environment variables from .env file
dotenv.config();

// Initialize the database connection
connectDB();

const app = express();

// Middleware for handling JSON
app.use(express.json());

// Your routes will go here
app.use('/api/v1', uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
