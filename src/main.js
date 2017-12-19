import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  'vaadin-grid',
  'vaadin-grid-column',
  'vaadin-date-picker',
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
