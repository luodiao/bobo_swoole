import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_ROOT = 'http://swoole.luoio.com/api'

export default {
  // 登录
  signIn (data) {
    return Vue.resource(API_ROOT + '/user/login').get(data)
  },

  // 注册
  signUp (data) {
    return Vue.resource(API_ROOT + '/user/register').get(data)
  }
}
