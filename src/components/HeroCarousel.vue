<template>
  <div class="hero-carousel">
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="3000"
      :transition="1000"
    >
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel-slide" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="slide-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = [
  {
    image: '/images/front.jpg',
    title: 'Welcome to Chateau Fry',
    description: 'A modern oasis in the heart of the city'
  },
  {
    image: '/images/pool.jpg',
    title: 'Elegant Living Spaces',
    description: 'Thoughtfully designed for comfort and style'
  },
  {
    image: '/images/resort.jpg',
    title: 'Outdoor Paradise',
    description: 'Perfect for entertainment and relaxation'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Satisfy&display=swap');

.hero-carousel {
  height: 500px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* Make sure the carousel container takes full width */
:deep(.carousel) {
  width: 100%;
  height: 100%;
}

:deep(.carousel__viewport) {
  width: 100%;
  height: 100%;
}

:deep(.carousel__track) {
  width: 100%;
  height: 100%;
}

:deep(.carousel__slide) {
  width: 100%;
  height: 100%;
}

.carousel-slide {
  height: 500px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0;
  padding: 0;
}

.slide-content {
  position: absolute;
  bottom: 15%;
  left: 10%;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6);
  max-width: 600px;
}

.slide-content h1 {
  font-family: 'Satisfy', cursive;
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.2;
  letter-spacing: 1px;
}

.slide-content p {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

/* Custom carousel navigation styles */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 0.5);
}

:deep(.carousel__pagination) {
  padding: 1rem;
}

:deep(.carousel__pagination-button) {
  background-color: rgba(255, 255, 255, 0.3);
}

:deep(.carousel__pagination-button--active) {
  background-color: white;
}

@media (max-width: 768px) {
  .slide-content h1 {
    font-size: 2.8rem;
  }
  
  .slide-content p {
    font-size: 1.2rem;
  }
}
</style> 