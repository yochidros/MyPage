import Vue from 'vue';
import App from './entry/App.vue';
import { createStore } from './store';
import { createRouter } from './router';

Vue.config.productionTip = false;

const router = createRouter();
const store = createStore();

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
