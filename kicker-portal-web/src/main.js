// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default-dark.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import Header from './components/Header';
import Navigation from './components/Navigation';

Vue.config.productionTip = false;

// plugins for vueJs
Vue.use(VueMaterial);

// global components
Vue.component('kp-header', Header);
Vue.component('kp-nav', Navigation);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
