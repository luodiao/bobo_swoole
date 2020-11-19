<template>
  <Row class="login-card">
    <h1 class="font-title">Sign in</h1>
    <p>Welcome to the official Chat web-client.</p>
    <Input v-model="init.username" size="large" class="text-input" placeholder="Enter your email" />
    <Input v-model="init.password" size="large" class="text-input" placeholder="Enter your password" />
    <Button size="large" type="primary" :loading="loading" long @click="login">Sign in</Button>
    <p></p>
    <p>Don't have an account yet <router-link to="/register">Sign up</router-link>.</p>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      init: {
        username: '',
        password: ''
      },
      loading: false
    }
  },

  methods: {
    login () {
      this.loading = true

      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';
</style>
