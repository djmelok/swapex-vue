import Vue from 'vue';

// import App from './pages/login.vue';
// import App from './pages/index.vue';
// import App from './pages/coin.vue';
// import App from './pages/buy.vue';
// import App from './pages/transfer.vue';
import App from './pages/provider.vue';
// import App from './pages/pre-check.vue';
// import App from './pages/cards.vue';

import VueResource from 'vue-resource';
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
