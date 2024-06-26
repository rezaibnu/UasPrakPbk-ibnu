<template>
    <q-page class="custom-page">
      <div class="custom-container">
        <div class="custom-card-wrapper">
          <q-card class="custom-card">
            <q-card-section class="custom-card-section">
              <h2 class="custom-card-title">Tugas 4</h2>
              <a class="custom-card-link" href="https://rezaibnu-prakpbk4.vercel.app/" target="_blank">Kunjungi Tugas 4</a>
              <a class="custom-card-link" href="/" target="_self">Kembali Ke Beranda</a>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style scoped>
  .custom-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #4b79a1, #283e51);
    padding: 0;
  }
  
  .custom-container {
    max-width: 600px;
    width: 100%;
    padding: 2rem;
  }
  
  .custom-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .custom-card {
    width: 100%;
    background: #f0f0f0;
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .custom-card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .custom-card-section {
    padding: 20px;
    text-align: center;
  }
  
  .custom-card-title {
    font-size: 2rem;
    font-weight: bold;
    color: #283e51;
    margin-bottom: 1rem;
  }
  
  .custom-card-link {
    display: block;
    margin-top: 1rem;
    font-size: 1rem;
    color: #4b79a1;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid #4b79a1;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .custom-card-link:hover {
    background-color: #4b79a1;
    color: #fff;
  }
  
  /* Additional margin between the links */
  .custom-card-link + .custom-card-link {
    margin-top: 1rem;
  }
  </style>
  