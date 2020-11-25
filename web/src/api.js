import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_ROOT = 'http://swoole.luoio.com/api'

export default {
  setResource (user) {
    Vue.http.interceptors.push((request, next) => {
      request.headers.set('Accept', 'application/json')
      if (user) {
        request.headers.set('Token', user.token)
        request.headers.set('Authorization', 'Bearer ' + user.token)
      }
    })
  },

  // 登录
  signIn (data) {
    return Vue.resource(API_ROOT + '/user/login').get(data)
  },

  // 注册
  signUp (data) {
    return Vue.resource(API_ROOT + '/user/register').get(data)
  },

  // 退出登录
  logout () {
    return Vue.resource(API_ROOT + '/user/logout').get()
  },

  // 设置用户信息
  setProfile (data) {
    return Vue.resource(API_ROOT + '/user/profile').save(data)
  },

  // 获取用户信息
  findUser (data) {
    return Vue.resource(API_ROOT + '/user/find').get(data)
  },

  // 添加好友
  friendsAdd (data) {
    return Vue.resource(API_ROOT + '/friends/add').save(data)
  }
}
