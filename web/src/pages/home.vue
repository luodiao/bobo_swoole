<template>
  <Row class="home">
    <Row class="left-col">
      <div class="bar-icon" :class="{'active':actvieMenu == 'message'}">
        <Icon type="ios-chatbubbles" @click="swtichMenu('message')" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'address'}">
        <Icon type="md-list-box" @click="swtichMenu('address')" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'profile'}">
        <Icon type="md-person" @click="swtichMenu('profile')" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'setting'}">
        <Icon type="md-settings" @click="swtichMenu('setting')" />
      </div>
    </Row>

    <Row class="center-col">
      2
    </Row>

    <Row class="right-col">
      3
    </Row>

    <!-- <Col :xs="0" :lg="2" class="left-col">
      <div class="bar-icon" :class="{'active':actvieMenu == 'message'}">
        <Icon type="ios-chatbubbles" size="25" @click="swtichMenu('message')" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'address'}">
        <Icon type="md-list-box" size="25" @click="swtichMenu('address')" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'profile'}">
        <Icon type="md-person" size="25" @click="swtichMenu('profile')" />
      </div>
    </Col>

    <Col :lg="8" class="center-col">2</Col>

    <Col>3</Col> -->
  </Row>
</template>

<script>
export default {
  data () {
    return {
      actvieMenu: 'message' // message=消息 address=通讯录 profile=个人
    }
  },

  methods: {
    swtichMenu (menu) {
      this.actvieMenu = menu
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';
</style>
