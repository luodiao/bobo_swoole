<template>
  <Row class="login-card">
    <h1 class="font-title">{{$t('Sign up')}}</h1>
    <p>{{$t('Welcome to the Bobo Chat web-client.')}}</p>
    <Form :model="model" :rules="rules" ref="validate">
      <FormItem prop="username">
        <Input size="large" class="text-input" v-model.trim="model.username" :placeholder="$t('Enter your username')" />
      </FormItem>
      <FormItem prop="password">
        <Input size="large" class="text-input" v-model.trim="model.password" type="password" :placeholder="$t('Enter your password')" />
      </FormItem>
      <FormItem prop="confirmPassword">
        <Input size="large" class="text-input" v-model.trim="model.confirmPassword" type="password" :placeholder="$t('Enter your confirm password')" />
      </FormItem>
      <FormItem>
        <Button size="large" type="primary" long @click="handleSubmit('validate')" :loading="loading">{{$t('Sign up')}}</Button>
      </FormItem>
    </Form>
    <p></p>
    <p>{{$t('Already have an account?')}} <router-link to="/login">{{$t('Sign in')}}</router-link></p>
  </Row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      model: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [
          { required: true, min: 5, max: 20, message: this.$t('The length is between {0} and {1} characters', ['5', '20']), trigger: 'change' }
        ],
        password: [
          { required: true, message: this.$t('The password cannot be empty'), trigger: 'change' }
        ],
        confirmPassword: [
          { required: true, message: this.$t('The confirm password cannot be empty'), trigger: 'change' }
        ]
      },
      loading: false
    }
  },

  methods: {
    ...mapActions(['signUp']),
    handleSubmit (name) {
      let check = true
      this.$refs[name].validate((valid) => {
        if (!valid) {
          check = false
        }
      })

      if (!check) {
        return false
      }

      if (this.model.password !== this.model.confirmPassword) {
        this.$Message.warning(this.$t('The two passwords do not match'))
        return false
      }

      this.loading = true
      this.signUp(this.model).then(res => {
        return res.body
      }).then(res => {
        if (res.code === 0) {
          this.$Message.error(res.msg)
          this.loading = false
          return false
        }

        this.$Message.success(res.msg)
        setTimeout(() => {
          this.loading = false
          this.$router.push('/login')
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';

</style>
