<template>
  <Row class="login-card">
    <h1 class="font-title">Sign up</h1>
    <p>Welcome to the official Chat web-client.</p>
    <Input size="large" class="text-input" placeholder="Enter your email" />
    <Input size="large" class="text-input" type="password" placeholder="Enter your password" />
    <Input size="large" class="text-input" type="password" placeholder="Enter your confirm password" />
    <Button size="large" type="primary" long>Sign in</Button>
    <p></p>
    <p>Don't have an account yet <router-link to="/login">Sign up</router-link>.</p>
  </Row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../style/app.scss';

</style>
