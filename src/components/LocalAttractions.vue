<template>
  <section class="attractions-section">
    <div class="container">
      <h2>Local Attractions</h2>
      <p class="subtitle">Discover things to do during your stay</p>
      
      <div class="attractions-content">
        <div class="map-container">
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
              &q=${encodeURIComponent(selectedAttraction.location)}
              &zoom=14`">
          </iframe>
        </div>
        
        <div class="attractions-list">
          <button 
            v-for="(attraction, index) in attractions" 
            :key="index"
            :class="['attraction-button', { active: selectedAttractionIndex === index }]"
            @click="selectAttraction(index)"
          >
            {{ attraction.title }}
          </button>
          
          <div class="attraction-details">
            <h3>{{ selectedAttraction.title }}</h3>
            <div v-html="formatDescription(selectedAttraction.description)"></div>
            <div class="attraction-address">
              <strong>Address:</strong> {{ selectedAttraction.address }}
            </div>
            <a 
              v-if="selectedAttraction.website" 
              :href="selectedAttraction.website" 
              target="_blank" 
              class="website-link"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const attractions = [
  {
    title: 'Gym',
    description: "There's a small gym in the clubhouse. The club house is free to use.\n\nIf you're looking for more equipment, Anytime Fitness is 5 miles away. They're 24 hours, but you'll need to swing by and get a keyfob. Let them know you're staying here and they'll give you a fair price.",
    location: 'Anytime Fitness Clermont',
    address: '17445 W Irlo Bronson Memorial, Clermont, FL 34714',
    website: 'https://www.anytimefitness.com/gyms/4796/clermont-fl-34714/'
  },
  {
    title: 'Disney World',
    description: "Walt Disney World Resort is just a 15-minute drive from Chateau Fry. Experience the magic of Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom.",
    location: 'Walt Disney World Resort',
    address: 'Orlando, FL 32830',
    website: 'https://disneyworld.disney.go.com/'
  },
  {
    title: 'Universal Studios',
    description: "Universal Orlando Resort is approximately 25 minutes away. Enjoy thrilling rides and attractions at Universal Studios Florida, Islands of Adventure, and Volcano Bay water park.",
    location: 'Universal Orlando Resort',
    address: '6000 Universal Blvd, Orlando, FL 32819',
    website: 'https://www.universalorlando.com/'
  },
  {
    title: 'Shopping',
    description: "The Orlando Vineland Premium Outlets offer upscale outlet shopping with over 160 stores. It's about a 20-minute drive from Chateau Fry.",
    location: 'Orlando Vineland Premium Outlets',
    address: '8200 Vineland Ave, Orlando, FL 32821',
    website: 'https://www.premiumoutlets.com/outlet/orlando-vineland'
  },
  {
    title: 'Dining',
    description: "Highway 192 (Irlo Bronson Memorial Highway) is lined with restaurants of all types, from fast food to fine dining. You'll find options like Olive Garden, Texas Roadhouse, and many local favorites within a 10-minute drive.",
    location: 'Restaurants on Highway 192 Kissimmee',
    address: 'W Irlo Bronson Memorial Hwy, Kissimmee, FL',
    website: null
  }
]

const selectedAttractionIndex = ref(0)
const selectedAttraction = computed(() => attractions[selectedAttractionIndex.value])

const selectAttraction = (index) => {
  selectedAttractionIndex.value = index
}

const formatDescription = (description) => {
  return description.replace(/\n/g, '<br>')
}
</script>

<style scoped>
.attractions-section {
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

.attractions-content {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.map-container {
  flex: 1;
  min-width: 300px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.attractions-list {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.attraction-button {
  padding: 1rem 1.5rem;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: #2c3e50;
  text-align: left;
  transition: all 0.3s;
}

.attraction-button:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.attraction-button.active {
  background-color: #0066cc;
  color: white;
  border-color: #0066cc;
}

.attraction-details {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.attraction-details h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.attraction-details div {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.attraction-address {
  font-style: italic;
  margin-top: 1rem;
}

.website-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.website-link:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .attractions-content {
    flex-direction: column;
  }
  
  .map-container {
    height: 300px;
  }
}
</style> 