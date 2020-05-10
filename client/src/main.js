import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resize from 'vue-resize-directive'

Vue.config.productionTip = false
Vue.use(resize)

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
