<template>
  <Row class="login-card">
    <h1 class="font-title">Sign in</h1>
    <p>Welcome to the official Chat web-client.</p>
    <Input v-model="init.username" size="large" class="text-input" placeholder="Enter your email" />
    <Input v-model="init.password" size="large" class="text-input" placeholder="Enter your password" />
    <Button size="large" type="primary" :loading="loading" long @click="showValideCodePanel">Sign in</Button>
    <p></p>
    <p>Don't have an account yet <router-link to="/register">Sign up</router-link>.</p>
    <Vcode :show="validCodeIsShow" @success="success" @close="close" />
  </Row>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'

export default {
  data () {
    return {
      init: {
        username: '',
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
    showValideCodePanel () {
      this.validCodeIsShow = true
    },
    login () {
      this.loading = true

      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
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
