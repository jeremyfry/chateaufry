<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>Chateau Fry</h2>
        </div>
        
        <div class="footer-contact">
          <h3>Contact Your Host</h3>
          <p class="phone">‪(734) 890-2680‬</p>
          <p class="email">
            <a href="mailto:chateaufry@gmail.com">chateaufry@gmail.com</a>
          </p>
        </div>
        
        <div class="footer-links">
          <h3>Book Your Stay</h3>
          <div class="booking-links">
            <a href="https://www.airbnb.com/rooms/54109316" target="_blank" class="booking-link">
              <span class="icon">🏠</span>
              AirBnB Listing
            </a>
            <a href="https://www.vrbo.com/2612601" target="_blank" class="booking-link">
              <span class="icon">🏖️</span>
              VRBO Listing
            </a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} Chateau Fry. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 2rem 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.footer-logo h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: white;
}

.footer-contact, .footer-links {
  min-width: 200px;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: #f8f9fa;
  font-weight: 600;
}

.phone, .email {
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.email a {
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.3s;
}

.email a:hover {
  color: #0066cc;
}

.booking-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.booking-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f8f9fa;
  text-decoration: none;
  padding: 0.3rem 0;
  transition: all 0.3s;
}

.booking-link:hover {
  color: #0066cc;
  transform: translateX(5px);
}

.icon {
  font-size: 1.1rem;
}

.copyright {
  text-align: center;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-logo, .footer-contact, .footer-links {
    width: 100%;
    text-align: center;
  }
  
  .booking-links {
    align-items: center;
  }
}
</style> 