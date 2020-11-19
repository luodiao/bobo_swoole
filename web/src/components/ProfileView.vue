<template>
  <Row class="component">
    <h2 class="font-title mb-6">Profile</h2>
    <Card class="profile-box mb-6">
      <div style="text-align:center">
        <Avatar icon="ios-person" size="large" class="mb-6" />
        <h3 class="nick">Gurudin</h3>
        <p>Bootstrap is an open source toolkit for developing web with HTML.</p>
      </div>
    </Card>

    <Col :span="24" class="footer-bottom">
      Logout
      <Icon type="md-log-out" />
    </Col>
  </Row>
</template>

<script>
export default {

}
</script>

<style>

</style>
