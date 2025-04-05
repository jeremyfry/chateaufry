const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// API endpoint to fetch calendar data
app.get('/api/calendar', async (req, res) => {
  try {
    // Get the Airbnb iCal URL from environment variables
    const AIRBNB_ICAL_URL = process.env.AIRBNB_ICAL_URL;
    
    if (!AIRBNB_ICAL_URL) {
      return res.status(500).json({ error: 'Airbnb iCal URL not configured' });
    }
    
    // Fetch the iCal data from Airbnb
    const response = await axios.get(AIRBNB_ICAL_URL);
    
    // Return the raw iCal data
    res.set('Content-Type', 'text/calendar');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    res.status(500).json({ error: 'Failed to fetch calendar data' });
  }
});

// For any other routes, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the site`);
}); 