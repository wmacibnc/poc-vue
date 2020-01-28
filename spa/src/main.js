import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import { routes } from './routes';

// Diretivas
import './directives/Transformer';
import msg from '../language/pt_BR';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});
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
