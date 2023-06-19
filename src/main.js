import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createVuesticEssential, VaTabs, VaTab } from 'vuestic-ui';

createApp(App)
  .use(
    createVuesticEssential({
      components: { VaTabs, VaTab },
    }),
  )
  .mount('#app');
