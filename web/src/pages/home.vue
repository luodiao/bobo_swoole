<template>
  <Row class="home">
    <Row class="left-col">
      <div class="bar-icon logo">
        Bo
      </div>
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
      <component :is="loadViewComponent"></component>
    </Row>

    <Row class="right-col">
      3
    </Row>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      actvieMenu: 'message', // message=消息 address=通讯录 profile=个人
      loadViewComponent: 'message-view' // 当前加载组件
    }
  },

  computed: {
    activeMenuData: {
      get () {
        return this.actvieMenu
      },
      set (value) {
        this.actvieMenu = value
        this.loadViewComponent = value + '-view'
      }
    }
  },

  components: {
    /** 信息列表组件 */
    'message-view': require('../components/MessageView').default,

    /** 信息列表组件 */
    'address-view': require('../components/AddressView').default,

    /** 信息列表组件 */
    'profile-view': require('../components/ProfileView').default
  },

  methods: {
    swtichMenu (menu) {
      this.activeMenuData = menu
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';
</style>
