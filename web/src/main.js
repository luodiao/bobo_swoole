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

Vue.config.productionTip = false

Vue.prototype.moment = Moment

Vue.use(ViewUI)
Vue.use(VueI18n)

// 是否登录
router.beforeEach((to, from, next) => {
  if (typeof Cookie.get('user') === 'undefined') {
    window.location = '/login'
  } else {
    next()
  }
})

// 实例登录信息
store.state.sign.user = Cookie.getJSON('user')

// 本地化
const i18n = new VueI18n({
  locale: 'en',
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
