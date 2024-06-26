<template>
    <q-page class="weather-page">
      <q-card class="weather-card">
        <q-card-section class="weather-header">
          <h1 class="title">Deteksi Cuaca</h1>
        </q-card-section>
  
        <q-card-section class="weather-body">
          <div class="search-bar">
            <input
              type="text"
              v-model="city"
              placeholder="Enter City Name"
              @keyup.enter="fetchWeather"
              class="city-input"
            />
            <q-btn @click="fetchWeather" color="primary" icon="search" round dense flat class="search-button" />
          </div>
  
          <div v-if="weather.main" class="weather-info">
            <div class="weather-icon">
              <i :class="weatherIcon"></i>
            </div>
            <div class="weather-details">
              <h2 class="temperature">{{ temperature }}°C</h2>
              <div class="description">{{ weatherDescription }}</div>
              <h3 class="city">{{ city }}</h3>
              <div class="extra-info">
                <p><i class="fas fa-wind"></i> Kecepatan Angin: {{ windSpeed }} m/s</p>
                <p><i class="fas fa-tint"></i> Kelembapan: {{ humidity }}%</p>
              </div>
            </div>
          </div>
          <div v-else class="no-data">No weather data available.</div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: 'Jakarta',
        weather: {},
        temperature: null,
        windSpeed: null,
        humidity: null,
      };
    },
    computed: {
      weatherIcon() {
        switch (this.weather.main) {
          case 'Clear': return 'fas fa-sun';
          case 'Clouds': return 'fas fa-cloud';
          case 'Rain': return 'fas fa-cloud-rain';
          case 'Snow': return 'fas fa-snowflake';
          case 'Thunderstorm': return 'fas fa-bolt';
          case 'Drizzle': return 'fas fa-cloud-showers-heavy';
          default: return 'fas fa-question';
        }
      },
      weatherDescription() {
        return this.weather.description ? this.weather.description.charAt(0).toUpperCase() + this.weather.description.slice(1) : '';
      }
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        const API_KEY = '4d1db2666da951482ad444c5f52dc755';
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`);
          this.weather = response.data.weather[0];
          this.temperature = response.data.main.temp;
          this.windSpeed = response.data.wind.speed;
          this.humidity = response.data.main.humidity;
        } catch (error) {
          console.error("Error fetching weather data:", error);
          alert("City not found or network error.");
        }
      }
    },
    mounted() {
      this.fetchWeather();
    }
  };
  </script>
  
  <style scoped>
  .weather-page {
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .weather-card {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 500px;
    padding: 20px;
  }
  
  .weather-header {
    background: transparent;
    padding: 10px;
    text-align: center;
  }
  
  .title {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
  }
  
  .weather-body {
    padding: 10px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .city-input {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  
  .search-button {
    border-radius: 0 25px 25px 0;
    background: #fff;
    color: #6a11cb;
  }
  
  .weather-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  
  .weather-icon {
    font-size: 5em;
  }
  
  .weather-details {
    text-align: center;
  }
  
  .temperature {
    font-size: 3em;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .description {
    font-size: 1.5em;
    margin-bottom: 5px;
  }
  
  .city {
    font-size: 1.2em;
    margin-top: 5px;
  }
  
  .extra-info {
    font-size: 1em;
    margin-top: 15px;
  }
  
  .extra-info p {
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .extra-info i {
    margin-right: 10px;
  }
  
  .no-data {
    text-align: center;
    font-size: 1.2em;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.7);
  }
  </style>
  