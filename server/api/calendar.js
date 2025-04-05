const axios = require('axios');

module.exports = (app) => {
  app.get('/api/calendar', async (req, res) => {
    try {
      const response = await axios.get(process.env.AIRBNB_ICAL_URL);
      res.send(response.data);
    } catch (error) {
      console.error('Error fetching calendar:', error);
      res.status(500).send('Error fetching calendar data');
    }
  });
}; 