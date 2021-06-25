require('./bootstrap');

import Vue from 'vue';

import { Router } from './router';
import routeModules from './routeModules';

import { store } from './store';
import { theme } from './constants/theme';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import App from './components/App.vue';

new Vue({
  el: '#app',
  components: { App },
  router: new Router({ routes: routeModules }),
  store,
  vuetify: new Vuetify({ theme })
});
