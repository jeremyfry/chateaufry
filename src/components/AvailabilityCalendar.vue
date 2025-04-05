<template>
  <section class="availability-section">
    <div class="container">
      <h2>Check Availability & Location</h2>
      <p class="subtitle">Plan your stay at Chateau Fry</p>
      
      <div class="content-wrapper">
        <div class="calendar-wrapper">
          <Calendar
            :attributes="calendarAttributes"
            :min-date="new Date()"
            :max-date="maxDate"
            :disabled-dates="bookedDates"
            color="blue"
            is-expanded
            transparent
          />
          <div class="calendar-legend">
            <div class="legend-item">
              <span class="legend-color available"></span>
              <span>Available</span>
            </div>
            <div class="legend-item">
              <span class="legend-color booked"></span>
              <span>Booked</span>
            </div>
          </div>
          
          <div class="booking-options">
            <h3>Ready to book?</h3>
            <div class="booking-buttons">
              <a href="https://www.airbnb.com/rooms/54109316" target="_blank" class="booking-button airbnb">
                <span class="icon">🏠</span>
                Book on Airbnb
              </a>
              <a href="https://www.vrbo.com/2612601" target="_blank" class="booking-button vrbo">
                <span class="icon">🏖️</span>
                Book on VRBO
              </a>
            </div>
          </div>
        </div>

        <div class="map-wrapper">
          <div class="map-container">
            <iframe
              width="100%"
              height="100%"
              style="border:0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :src="`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
                &q=2605+Emerald+Island+Blvd,+34747
                &zoom=14`">
            </iframe>
          </div>
          <div class="location-info">
            <h3>Location</h3>
            <p>2605 Emerald Island Blvd, Kissimmee, FL 34747</p>
            <div class="distance-info">
              <div class="distance-item">
                <strong>Disney World:</strong> 15 min drive
              </div>
              <div class="distance-item">
                <strong>Universal Studios:</strong> 25 min drive
              </div>
              <div class="distance-item">
                <strong>Orlando Int'l Airport:</strong> 30 min drive
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Calendar } from 'v-calendar'
import axios from 'axios'
import ICAL from 'ical.js'
import 'v-calendar/style.css'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const bookedDates = ref([])
const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 12))

// Replace this URL with your actual Airbnb iCal feed URL
const AIRBNB_ICAL_URL = 'https://www.airbnb.com/calendar/ical/54109316.ics?s=3fbc2c40965513e907b961818bd2d834'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const calendarAttributes = ref([
  {
    dates: bookedDates,
    highlight: {
      color: 'blue',
      fillMode: 'solid',
    },
  },
])

const fetchAvailability = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/calendar`)
    const jcalData = ICAL.parse(response.data)
    const comp = new ICAL.Component(jcalData)
    const events = comp.getAllSubcomponents('vevent')
    
    const dates = events.map(event => {
      const startDate = event.getFirstPropertyValue('dtstart')
      const endDate = event.getFirstPropertyValue('dtend')
      return {
        start: new Date(startDate),
        end: new Date(endDate)
      }
    })
    
    bookedDates.value = dates
  } catch (error) {
    console.error('Error fetching availability:', error)
  }
}

onMounted(() => {
  fetchAvailability()
})
</script>

<style scoped>
.availability-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.calendar-wrapper {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.map-wrapper {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.location-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.location-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.location-info p {
  color: #6c757d;
  margin-bottom: 1rem;
}

.distance-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.distance-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
}

h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #6c757d;
  margin-bottom: 2rem;
}

.calendar-legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: black;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  color: black;
}

.legend-color.available {
  background-color: #fff;
  border: 2px solid #ddd;
}

.legend-color.booked {
  background-color: rgba(0, 0, 255, 0.2);
  border: 2px solid rgba(0, 0, 255, 0.4);
}

/* Calendar height adjustment */
:deep(.vc-container) {
  border: none;
  width: 100%;
  max-height: 350px;
}

:deep(.vc-pane-container) {
  width: 100%;
}

:deep(.vc-weeks) {
  padding: 0;
  width: 100%;
}

:deep(.vc-day) {
  padding: 3px 0;
  min-height: 36px;
  color: #000;
}

:deep(.vc-day-content) {
  width: 28px;
  height: 28px;
  color: #000;
}

:deep(.vc-title) {
  color: #000;
  font-weight: 600;
}

:deep(.vc-weekday) {
  color: #000;
  opacity: 0.7;
  font-weight: 500;
}

:deep(.vc-highlight-content-solid) {
  color: white !important;
}

/* Booking options */
.booking-options {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
}

.booking-options h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.booking-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.booking-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  min-width: 160px;
}

.booking-button.airbnb {
  background-color: #FF5A5F;
  color: white;
}

.booking-button.vrbo {
  background-color: #3D67FF;
  color: white;
}

.booking-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .calendar-wrapper,
  .map-wrapper {
    width: 100%;
  }
  
  .booking-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .booking-button {
    width: 100%;
    max-width: 250px;
  }
}
</style> 