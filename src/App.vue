<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-gradient">
      <q-toolbar>
        <q-toolbar-title>
          <span class="title-text">Website Deteksi Cuaca</span>
        </q-toolbar-title>
        <q-space />
        <q-btn-dropdown flat label="Tugas Ibnu" no-caps>
          <q-list>
            <q-item clickable v-ripple to="/Tugas1">
              <q-item-section>  
                <q-item-label>Tugas 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas2">
              <q-item-section>
                <q-item-label>Tugas 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas3">
              <q-item-section>
                <q-item-label>Tugas 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas4">
              <q-item-section>
                <q-item-label>Tugas 4</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas5">
              <q-item-section>
                <q-item-label>Tugas 5</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas6">
              <q-item-section>
                <q-item-label>Tugas 6</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas7">
              <q-item-section>
                <q-item-label>Tugas 7</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Global styles for the entire application */
body {
  font-family: 'Poppins', 'Arial', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

/* Styles for App.vue */
#q-app {
  min-height: 100vh;
}

.bg-gradient {
  background: linear-gradient(to right, #43cea2, #185a9d);
}

.title-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

/* Styles for q-toolbar */
.q-toolbar {
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
}

.q-toolbar-title {
  flex: 1;
  display: flex;
  align-items: center;
}

/* Styles for q-list and q-item */
.q-list {
  padding: 0;
}

.q-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.q-item-section {
  font-size: 1rem;
  color: #ffffff;
}

.q-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
