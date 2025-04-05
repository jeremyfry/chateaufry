const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Cache configuration
const CACHE_DURATION = 20 * 60 * 1000; // 20 minutes in milliseconds
let calendarCache = {
  data: null,
  timestamp: null
};

// Enable CORS
app.use(cors());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Function to check if cache is valid
const isCacheValid = () => {
  if (!calendarCache.data || !calendarCache.timestamp) return false;
  return (Date.now() - calendarCache.timestamp) < CACHE_DURATION;
};

// Function to fetch fresh calendar data
const fetchCalendarData = async () => {
  const AIRBNB_ICAL_URL = process.env.AIRBNB_ICAL_URL;
  
  if (!AIRBNB_ICAL_URL) {
    throw new Error('Airbnb iCal URL not configured');
  }
  
  const response = await axios.get(AIRBNB_ICAL_URL);
  return response.data;
};

// API endpoint to fetch calendar data
app.get('/api/calendar', async (req, res) => {
  try {
    // Check if we have valid cached data
    if (isCacheValid()) {
      console.log('Serving cached calendar data');
      res.set('Content-Type', 'text/calendar');
      return res.send(calendarCache.data);
    }

    // Fetch fresh data
    console.log('Fetching fresh calendar data');
    const calendarData = await fetchCalendarData();
    
    // Update cache
    calendarCache = {
      data: calendarData,
      timestamp: Date.now()
    };
    
    // Return the data
    res.set('Content-Type', 'text/calendar');
    res.send(calendarData);
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    
    // If we have cached data (even if expired), serve it as fallback
    if (calendarCache.data) {
      console.log('Serving expired cache as fallback');
      res.set('Content-Type', 'text/calendar');
      return res.send(calendarCache.data);
    }
    
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