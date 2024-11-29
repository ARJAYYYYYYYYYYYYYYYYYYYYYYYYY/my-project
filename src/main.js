import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)  // Ensure the router is used here
  .mount('#app');
