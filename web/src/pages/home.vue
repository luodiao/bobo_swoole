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
        <Badge :dot="firendsPending.length > 0">
          <Icon type="md-list-box" />
        </Badge>
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'profile'}"  @click="swtichMenu('profile')">
        <Icon type="md-person" />
      </div>
      <div class="bar-icon" :class="{'active':actvieMenu == 'setting'}" @click="swtichMenu('setting')">
        <Icon type="md-settings" />
      </div>
    </Row>

    <Row class="center-col">
      <component :is="actvieMenu + '-view'" :options="settingComponentData" v-model="currentUser"></component>
    </Row>

    <Row class="right-col" :class="{'right-col-active':JSON.stringify(currentUser) != '{}'}">
      <component :is="loadSettingComponent" v-model="currentUser"></component>
    </Row>
  </Row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      actvieMenu: 'message', // message=消息 address=通讯录 profile=个人 setting=设置
      loadSettingComponent: 'message-setting', // 当前右侧加载组件
      currentUser: {}, // 当前选中用户
      initMessages: { // 信息列表
        items: [
          {
            id: 1,
            dot: true,
            online: true,
            nick: 'BoBo',
            avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2070453827,1163403148&fm=26&gp=0.jpg',
            datetime: '11:10 pm',
            description: 'This is description'
          },
          {
            id: 2,
            dot: false,
            online: false,
            nick: 'Louio',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1373560079,871367259&fm=26&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 3,
            dot: false,
            online: true,
            nick: 'Air jordan',
            avatar: '',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 4,
            dot: false,
            online: false,
            nick: 'Aaron',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2271338977,1611087163&fm=26&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 5,
            dot: false,
            online: false,
            nick: 'Bart',
            avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157220405,301754405&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 6,
            dot: false,
            online: false,
            nick: 'Caleb',
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2438388894,880471568&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 7,
            dot: false,
            online: false,
            nick: 'Dave',
            avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=939193375,2877147297&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 8,
            dot: false,
            online: false,
            nick: 'Egbert',
            avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1101467379,169077944&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 9,
            dot: false,
            online: false,
            nick: 'Fitzgerald',
            avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640295866,1857432489&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          },
          {
            id: 10,
            dot: false,
            online: false,
            nick: 'Gregary',
            avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3600877798,4182679885&fm=11&gp=0.jpg',
            datetime: '05:10 am',
            description: 'This is description, this is description.'
          }
        ]
      }
    }
  },

  computed: {
    ...mapState({
      user: state => state.sign.user,
      firendsPending: state => state.firendsPending
    }),
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
    ...mapActions(['friendsList']),
    swtichMenu (menu) {
      this.activeMenuData = menu
    }
  },

  created () {
    this.friendsList()
  }
}
</script>

<style lang="scss">
// @import '../style/app.scss';
</style>
