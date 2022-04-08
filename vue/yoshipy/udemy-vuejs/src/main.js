import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './LikeNumber.vue';
import LikeHeader from './LikeHeader.vue'

Vue.config.productionTip = false;

Vue.component('LikeNumber', LikeNumber);
Vue.component('LikeHeader', LikeHeader);

new Vue({
  render: (h) => h(App),
  // render: function (h) {
  //   return h(App);
  // },
}).$mount('#app');
