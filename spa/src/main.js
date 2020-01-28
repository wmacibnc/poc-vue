import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

// Diretivas
import './directives/Transformer';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  mode: 'history'
});

Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
