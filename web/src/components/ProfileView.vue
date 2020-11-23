<template>
  <Row class="component">
    <h2 class="font-title mb-6">{{$t('Profile')}}</h2>
    <Card class="profile-box mb-6">
      <div style="text-align:center">
        <Avatar icon="ios-person" :src="user.avatar" size="large" class="mb-6"></Avatar>
        <h3 class="nick">{{user.nickname}}</h3>
        <p>Bootstrap is an open source toolkit for developing web with HTML.</p>
      </div>
    </Card>
  </Row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'profile-view',

  computed: {
    ...mapState({
      user: state => state.sign.user
    })
  }
}
</script>
