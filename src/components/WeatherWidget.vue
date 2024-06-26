<template>
    <div class="weather-widget">
      <div class="weather-header">
        <h2 class="widget-title">Weather Widget</h2>
        <q-space />
        <q-btn @click="toggleSettings" flat round icon="settings" class="widget-settings" />
      </div>
      <div class="weather-content">
        <div class="search-bar">
          <input
            type="text"
            v-model="city"
            placeholder="Enter City Name"
            @keyup.enter="fetchWeather"
            class="city-input"
          />
          <q-btn @click="fetchWeather" class="search-button" color="primary" label="Search" />
        </div>
        <div v-if="weather.main" class="weather-info">
          <h2>{{ city }}</h2>
          <div :class="`weather-icon icon-${weather.main.toLowerCase()}`"></div>
          <div class="description">{{ weatherDescription }}</div>
          <div class="temperature">{{ temperature }}°C</div>
        </div>
        <div v-else class="no-data">No weather data available.</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: 'Jakarta',
        weather: {},
        temperature: null,
      };
    },
    computed: {
      weatherDescription() {
        return this.weather.description
          ? this.weather.description.charAt(0).toUpperCase() + this.weather.description.slice(1)
          : '';
      },
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        const API_KEY = '296f8390da4390c90a7f0f5da4155943';
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`
          );
          this.weather = response.data.weather[0];
          this.temperature = response.data.main.temp;
        } catch (error) {
          console.error('Error fetching weather data:', error);
          alert('City not found or network error.');
        }
      },
      toggleSettings() {
        // Implement functionality to toggle settings (if needed)
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  .weather-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .widget-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
  }
  
  .widget-settings {
    color: #666;
  }
  
  .weather-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .city-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px 0 0 6px;
    width: 70%;
    font-size: 16px;
    outline: none;
  }
  
  .search-button {
    padding: 12px 20px;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #34ace0;
    color: white;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #227093;
  }
  
  .weather-info {
    background: linear-gradient(to top, #4caf50, #81c784);
    padding: 20px;
    border-radius: 8px;
    color: #fff;
    text-align: center;
  }
  
  .weather-icon {
    margin: 20px 0;
    font-size: 80px;
  }
  
  .icon-sunny::before {
    content: '☀️';
    animation: spin 5s linear infinite;
    font-size: 5rem;
  }
  
  .icon-cloudy::before {
    content: '☁️';
    font-size: 5rem;
    animation: drift 4s ease-in-out infinite;
  }
  
  .icon-rainy::before {
    content: '🌧️';
    font-size: 5rem;
    animation: rain 1s linear infinite;
  }
  
  .icon-snowy::before {
    content: '❄️';
    font-size: 5rem;
    animation: snow 1.5s linear infinite;
  }
  
  .icon-thunderstorm::before {
    content: '🌩️';
    font-size: 5rem;
    animation: flash 0.6s linear infinite;
  }
  
  .icon-drizzle::before {
    content: '🌦️';
    font-size: 5rem;
    animation: drizzle 1.2s linear infinite;
  }
  
  .icon-default::before {
    content: '🌥️';
    font-size: 5rem;
  }
  
  .description {
    font-size: 20px;
    margin: 10px 0;
  }
  
  .temperature {
    font-size: 28px;
    font-weight: bold;
  }
  
  .no-data {
    font-size: 22px;
    color: #777;
    margin-top: 30px;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes drift {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }
  
  @keyframes rain {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  
  @keyframes snow {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }
  
  @keyframes flash {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  @keyframes drizzle {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(7px);
    }
  }
  </style>
  