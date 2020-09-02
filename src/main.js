import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'
import weui from "weui.js/dist/weui";
import 'weui'

import moment from 'moment'
Vue.prototype.$moment = moment

Vue.prototype.$weui = weui;

Vue.config.productionTip = false;

Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

