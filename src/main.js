// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {VTable, VPagination} from 'vue-easytable'
import 'vue-easytable/libs/themes-base/index.css'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'
import './assets/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './store'
import global_ from './components/global'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueResource)

Vue.component('icon', Icon)
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.prototype.GLOBAL = global_
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
