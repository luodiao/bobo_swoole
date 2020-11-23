<template>
  <Row class="component">
    <h2 class="font-title mb-6">{{$t('Profile')}}</h2>
    <Card class="profile-box mb-6">
      <div style="text-align:center">
        <Avatar icon="ios-person" size="large" class="mb-6"></Avatar>
        <h3 class="nick">Gurudin</h3>
        <p>Bootstrap is an open source toolkit for developing web with HTML.</p>
      </div>
    </Card>

    
  </Row>
</template>

<script>
export default {
  name: 'profile-view'
}
</script>
