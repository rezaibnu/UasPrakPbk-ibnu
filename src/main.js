import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar/quasar'
import router from './router'

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')