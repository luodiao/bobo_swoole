import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 登录注册模块
    sign: require('./signStore').default
  }
})
