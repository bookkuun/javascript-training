import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 上記と同じ意味
  // render: function (h) {
  //   return h(App);
  // },
}).$mount('#app');
