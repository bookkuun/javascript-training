import Vue from 'vue';
import App from './App.vue';
import router from './router';

// import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;

// Vue.component('LikeNumber', LikeNumber);

new Vue({
  router,
  render: (h) => h(App),
  // 上記と同じ意味
  // render: function (h) {
  //   return h(App);
  // },
}).$mount('#app');
