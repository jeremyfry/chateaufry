const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS for your Vue frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173' // Default Vite dev server port
}));

// Import routes
require('./api/calendar.js')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 