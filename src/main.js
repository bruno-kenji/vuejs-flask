import Vue from 'vue';
import App from './App';
import router from './router';
import {
  Vuetify,
  VApp,
  VDataTable,
  VIcon,
  } from 'vuetify';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

Vue.use(Vuetify, {
  components: {
    VApp,
    VDataTable,
    VIcon,
  },
});
