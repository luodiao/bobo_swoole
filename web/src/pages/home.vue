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
      <component :is="actvieMenu + '-view'" v-model="settingComponentData"></component>
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
      actvieMenu: 'message', // message=消息 address=通讯录 profile=个人 setting=设置
      loadSettingComponent: 'message-setting', // 当前右侧加载组件
      initMessages: { // 信息列表
        current: {},
        items: [
          {
            id: 1,
            dot: true,
            nick: 'BoBo',
            avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2070453827,1163403148&fm=26&gp=0.jpg',
            datetime: '11:10 pm',
            description: 'This is description'
          },
          {
            id: 2,
            dot: false,
            nick: 'Louio',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1373560079,871367259&fm=26&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 3,
            dot: false,
            nick: 'Air jordan',
            avatar: '',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 4,
            dot: false,
            nick: 'Air jordan',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2271338977,1611087163&fm=26&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 5,
            dot: false,
            nick: 'Air jordan',
            avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157220405,301754405&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 6,
            dot: false,
            nick: 'Air jordan',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2438388894,880471568&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          }
        ]
      }
    }
  },

  computed: {
    activeMenuData: {
      get () {
        return this.actvieMenu
      },
      set (value) {
        this.actvieMenu = value
      }
    },
    settingComponentData () {
      let data = {}
      switch (this.actvieMenu) {
        case 'message':
          data = this.initMessages
          break
        default:
          break
      }

      return data
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
    }
  }
}
</script>

<style lang="scss">
// @import '../style/app.scss';
</style>
