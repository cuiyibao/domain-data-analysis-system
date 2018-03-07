/**
 * Created by bao on 2017/12/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { constantRouterMap } from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routes: constantRouterMap
  }
})

export default store
