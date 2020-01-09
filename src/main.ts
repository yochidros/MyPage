import './registerServiceWorker';
import Vue from 'vue';
import App from './entry/App.vue';
import { createStore } from './store';
import { createRouter } from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const router = createRouter();
const store = createStore();

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
