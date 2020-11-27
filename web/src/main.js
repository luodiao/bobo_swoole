// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import Moment from 'moment'
import store from './store/index'
import Cookie from 'js-cookie'
import API from './api'
import WS from './websocket/websocket'

Vue.config.productionTip = false

Vue.prototype.moment = Moment

Vue.use(ViewUI)
Vue.use(VueI18n)
Vue.use(WS, {debug: true, connection: 'ws://0.0.0.0:9502', heartbeat: 59000})

// 是否登录
router.beforeEach((to, from, next) => {
  if (typeof Cookie.get('user') === 'undefined' && to.path !== '/login' && to.path !== '/register') {
    next({name: 'Login'})
  } else if (typeof Cookie.get('user') !== 'undefined' && (to.path === '/login' || to.path === '/register')) {
    next({name: 'Index'})
  } else {
    next()
  }
})

// 实例登录信息
store.state.sign.user = Cookie.getJSON('user')

// 设置请求头
API.setResource(Cookie.getJSON('user'))

// 设置主题
window.document.documentElement.setAttribute('data-theme', typeof Cookie.get('data-theme') !== 'undefined' ? Cookie.get('data-theme') : 'light')

// 本地化
const i18n = new VueI18n({
  locale: typeof Cookie.get('language') !== 'undefined' ? Cookie.get('language') : 'en',
  messages: {
    'zh': require('./language/zh'),
    'en': require('./language/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
