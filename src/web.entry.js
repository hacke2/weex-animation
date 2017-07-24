import Vue from 'vue';
import weex from 'weex-vue-render';
import '@weex-project/weex-picker';
import App from './App.vue';

weex.init(Vue);

new Vue({
  el: '#app',
  render: h => h(App)
});

