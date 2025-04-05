<script setup>
import HeroCarousel from './components/HeroCarousel.vue'
import AvailabilityCalendar from './components/AvailabilityCalendar.vue'
import VisitorInfo from './components/VisitorInfo.vue'
import LocalAttractions from './components/LocalAttractions.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <main>
    <HeroCarousel />
    <AvailabilityCalendar />
    <VisitorInfo />
    <LocalAttractions />
  </main>
  <SiteFooter />
</template>

<style>
/* Reset default margins and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
