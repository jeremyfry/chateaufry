<template>
  <section class="visitor-info-section">
    <div class="container">
      <h2>Visitor Information</h2>
      <p class="subtitle">Everything you need to know for a comfortable stay</p>
      
      <div class="info-tabs">
        <div class="tab-buttons">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            :class="['tab-button', { active: activeTab === index }]"
            @click="activeTab = index"
          >
            {{ tab.title }}
          </button>
        </div>
        
        <div class="tab-content">
          <!-- Emergency Contacts -->
          <div v-if="activeTab === 0" class="tab-pane">
            <div class="info-card">
              <h3>Home Related Issues</h3>
              <p>For all other urgent matters please use the following contacts:</p>
              <p><strong>Tarlena</strong><br>
              (407) 452-9006<br>
              (24 hour contacts)</p>
            </div>
            
            <div class="info-card">
              <h3>Emergency Service</h3>
              <p>For major emergencies dial <strong>911</strong></p>
              <p>Police Department - (407) 846-3333<br>
              Fire Department - (407) 792-6450</p>
            </div>
            
            <div class="info-card">
              <h3>Hospital</h3>
              <p><strong>Orlando Health</strong> - <a href="https://www.orlandohealth.com" target="_blank">Website</a><br>
              16966 Cagan Ridge Blvd, Clermont, Fl 37149<br>
              6 Miles away, under 15 minute drive</p>
            </div>
          </div>
          
          <!-- Check In/Checkout -->
          <div v-if="activeTab === 1" class="tab-pane">
            <div class="info-card">
              <h3>Check In</h3>
              <p>You should have already received a door code via text message. If you need help getting checked in the home's address and our contact info is below</p>
              <p><strong>Phone:</strong> ‪(734)-890-2680‬<br>
              <strong>Email:</strong> chateaufry@gmail.com<br>
              <strong>Address:</strong> 2605 Emerald Island Blvd, Kissimmee, Fl 34747</p>
            </div>
            
            <div class="info-card">
              <h3>Check Out</h3>
              <p>Check-out is at 10 AM on the last day of your reservation. Once you've loaded up all your belongings I suggest taking a walk through the house one last time to make sure nothing was left behind. Phone chargers and stuffed animals are easy to overlook but you'll miss them later!</p>
              <p>If you signed into any streaming services on the TV remember to sign out.</p>
              <p>Make sure to hit the lock button the door on your way out and that's it. Your stay with us has come to a close and we'll be waiting for you to visit us again!</p>
            </div>
          </div>
          
          <!-- House Rules -->
          <div v-if="activeTab === 2" class="tab-pane">
            <div class="info-card">
              <p class="intro-text">We want you to have fun well your here but there are a couple rules to make sure the experience is smooth for you and others that come after you. If you have any questions about these don't hesitate to ask.</p>
            </div>
            
            <div class="info-card">
              <h3>Absolutely No Glass Outside</h3>
              <p>Breaking a glass is never fun, but if it happens near the pool it's even worse. Because of this there is plastic cups, plates and wine glasses in the cupboard. Please keep all breakables inside.</p>
            </div>
            
            <div class="info-card">
              <h3>No Pets or Smoking</h3>
              <p>In order to prevent any issues with allergies we do not allow for pets or smoking inside the home.</p>
            </div>
            
            <div class="info-card">
              <h3>Be Respectful</h3>
              <p>Quiet hours are 11pm to 8am. If you experience problems with guests at other homes contact the club house at (407) 394-9032</p>
            </div>
          </div>
          
          <!-- Home Manual -->
          <div v-if="activeTab === 3" class="tab-pane">
            <div class="info-card">
              <p class="intro-text">We've tried to make everything about the house as clear as possible, but if you need some details on anything you can find them below</p>
            </div>
            
            <div class="info-card">
              <h3>Wifi Access</h3>
              <p>The Wifi SSID and password are available via QR code in the kitchen, and in the printed welcome book located by the living room TV</p>
            </div>
            
            <div class="info-card">
              <h3>Heated Pool</h3>
              <p>If you'd like for the pool to be heated during your stay, please contact us and we will have the breaker turned on. There is a $25/day fee for heating the pool</p>
            </div>
            
            <div class="info-card">
              <h3>Hot Tub</h3>
              <p>The hot tub is free to use for the duration of your stay. When turning on the switch the hot tub will run for at least 2 hours at first. This is normal and it is heating up, but may take around 10 hours to come up to temp.</p>
            </div>
            
            <div class="info-card">
              <h3>Air Conditioning</h3>
              <p>Thermostats are located both upstairs and at ground level. They are independent but setting one to heat and the other to cool will cause the upstairs thermostat to turn off.</p>
            </div>
            
            <div class="info-card">
              <h3>Cable/Streaming Services</h3>
              <p>Cable is available on all TVs with an extended channel selection available on the living room TV. Feel free to use any streaming service available on the Smart TV in the living room, but remember to sign out at the end of your stay!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  { title: 'Emergency Contacts' },
  { title: 'Check In/Checkout' },
  { title: 'House Rules' },
  { title: 'Home Manual' }
]
</script>

<style scoped>
.visitor-info-section {
  padding: 4rem 2rem;
  background-color: white;
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

.info-tabs {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-buttons {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
}

.tab-button {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #6c757d;
  transition: all 0.3s;
}

.tab-button:hover {
  background-color: rgba(0, 0, 255, 0.05);
}

.tab-button.active {
  color: #0066cc;
  border-bottom: 2px solid #0066cc;
  background-color: white;
}

.tab-content {
  padding: 2rem;
}

.tab-pane {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.info-card p {
  color: #6c757d;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.info-card p:last-child {
  margin-bottom: 0;
}

.intro-text {
  font-style: italic;
  color: #6c757d;
}

.info-card a {
  color: #0066cc;
  text-decoration: none;
}

.info-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .tab-buttons {
    flex-direction: column;
  }
  
  .tab-button {
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  .tab-button.active {
    border-bottom: 1px solid #eee;
    border-left: 4px solid #0066cc;
  }
  
  .tab-pane {
    grid-template-columns: 1fr;
  }
}
</style> 