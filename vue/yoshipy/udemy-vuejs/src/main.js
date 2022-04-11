import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;

Vue.component('LikeNumber', LikeNumber);

new Vue({
  render: (h) => h(App),
  // render: function (h) {
  //   return h(App);
  // },
}).$mount('#app');
