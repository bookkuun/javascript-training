import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  // 上記と同じ意味
  // render: function (h) {
  //   return h(App);
  // },
}).$mount('#app');
