window.Vue = require('vue');

Vue.component('test-component', require('./components/example.vue').default);

const app = new Vue({
  el: '#app'
});