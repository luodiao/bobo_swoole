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
      <component :is="actvieMenu + '-view'" v-model="currentUser"></component>
    </Row>

    <Row class="right-col" :class="{'right-col-active':JSON.stringify(currentUser) != '{}'}">
      <component :is="loadSettingComponent" v-model="currentUser" v-if="JSON.stringify(currentUser) !== '{}'"></component>
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
      currentUser: {} // 当前选中用户
    }
  },

  computed: {
    ...mapState({
      user: state => state.sign.user,
      firendsPending: state => state.friends.friendsPending,
      friends: state => state.friends.friendsList
    }),
    activeMenuData: {
      get () {
        return this.actvieMenu
      },
      set (value) {
        this.actvieMenu = value
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

  watch: {
    currentUser: function (value) {
      if (JSON.stringify(value) === '{}') {
        this.initSocket()
      }
    }
  },

  methods: {
    ...mapActions(['friendsList']),
    swtichMenu (menu) {
      this.activeMenuData = menu
    },
    initSocket () {
      console.log('监控home')
      this.$ws.monitor(this.user.id)
      this.$ws.notice.call(resp => {
        if (JSON.stringify(this.currentUser) === '{}') {
          this.$Message.info('新消息：' + resp.data)
        }
      })
    }
  },

  created () {
    this.friendsList()
    this.initSocket()
  },

  destroyed () {
    this.$ws.close()
  }
}
</script>

<style lang="scss">
</style>
