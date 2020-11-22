<template>
  <Row class="login-card">
    <h1 class="font-title">{{$t('Sign up')}}</h1>
    <p>{{$t('Welcome to the Bobo Chat web-client.')}}</p>
    <Input size="large" class="text-input" :placeholder="$t('Enter your username')" />
    <Input size="large" class="text-input" type="password" :placeholder="$t('Enter your password')" />
    <Input size="large" class="text-input" type="password" :placeholder="$t('Enter your confirm password')" />
    <Button size="large" type="primary" long>{{$t('Sign up')}}</Button>
    <p></p>
    <p>{{$t('Already have an account?')}} <router-link to="/login">{{$t('Sign in')}}</router-link></p>
  </Row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../style/app.scss';

</style>
