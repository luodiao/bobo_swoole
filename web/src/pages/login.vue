<template>
  <Row class="login-card">
    <h1 class="font-title">{{$t('Sign in')}}</h1>
    <p>{{$t('Welcome to the Bobo Chat web-client.')}}</p>
    <Input v-model="init.account" size="large" class="text-input" :placeholder="$t('Enter your username')" />
    <Input v-model="init.password" type="password" size="large" class="text-input" :placeholder="$t('Enter your password')" />
    <Button size="large" type="primary" :loading="loading" long @click="showValideCodePanel">{{$t('Sign in')}}</Button>
    <p></p>
    <p>{{$t("Don't have an account yet")}} <router-link to="/register">{{$t('Sign up')}}</router-link></p>
    <Vcode :show="validCodeIsShow" @success="success" @close="close" />
  </Row>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'
import Cookie from 'js-cookie'
import API from '../api'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      init: {
        account: '',
        password: ''
      },
      loading: false,
      validCodeIsShow: false
    }
  },

  components: {
    Vcode
  },

  methods: {
    ...mapActions(['signIn', 'setUser']),
    showValideCodePanel () {
      this.validCodeIsShow = true
    },
    login () {
      this.loading = true

      this.signIn(this.init).then(res => {
        return res.body
      }).then(res => {
        if (res.code === 0) {
          this.$Message.error(res.msg)
          this.loading = false
          return false
        }

        this.$Message.success(res.msg)
        this.setUser(res.data.userinfo)
        API.setResource(Cookie.getJSON('user'))
        Cookie.set('user', res.data.userinfo, { expires: 7 })
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      })
    },
    success () {
      this.validCodeIsShow = false

      this.login()
    },
    close () {
      this.validCodeIsShow = false
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';
</style>
