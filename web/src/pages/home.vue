<template>
  <Row class="home">
    <Row class="left-col">
      <div class="bar-icon logo">
        Bo
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'message'}"  @click="swtichMenu('message')">
        <Icon type="ios-chatbubbles" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'address'}" @click="swtichMenu('address')">
        <Icon type="md-list-box" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'profile'}"  @click="swtichMenu('profile')">
        <Icon type="md-person" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'setting'}" @click="swtichMenu('setting')">
        <Icon type="md-settings" />
      </div>
    </Row>

    <Row class="center-col">
      <ButtonGroup>
        <Button @click.native="themes('light')">light</Button>
        <Button @click.native="themes('dark')">dark</Button>
      </ButtonGroup>

      <component :is="loadViewComponent"></component>
    </Row>

    <Row class="right-col right-col-active">
      <component :is="loadSettingComponent"></component>
    </Row>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      actvieMenu: 'message', // message=消息 address=通讯录 profile=个人
      loadViewComponent: 'message-view', // 当前左侧加载组件
      loadSettingComponent: 'message-setting' // 当前右侧加载组件
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

    /** 通讯录组件 */
    'address-view': require('../components/AddressView').default,

    /** 个人信息组件 */
    'profile-view': require('../components/ProfileView').default,

    /** 个人设置组件 */
    'setting-view': require('../components/SettingView').default,

    /** 对话窗口组件 */
    'message-setting': require('../components/MessageSetting').default
  },

  methods: {
    swtichMenu (menu) {
      this.activeMenuData = menu
    },
    themes (theme) {
      alert(theme)
      window.document.documentElement.setAttribute('data-theme', theme)
    }
  }
}
</script>

<style lang="scss">
// @import '../style/app.scss';
</style>
