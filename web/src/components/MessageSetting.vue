<template>
  <Row class="message">
    <Row v-if="JSON.stringify(value) == '{}'" class="text-empty">BoBo swoole</Row>

    <Row v-else>
      <div class="header">
        <div class="back"><Icon type="ios-arrow-back" class="search-icon" @click.native="goBack"></Icon></div>
        <List class="header-bar">
          <ListItem>
            <ListItemMeta>
              <template slot="avatar">
                <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
              </template>
              <template slot="title">
                <h6 class="nick">
                  {{value.nickname}}
                </h6>
              </template>
              <template slot="description">
                <p class="description"><Badge :status="value.online ? 'success' : 'default'"></Badge>{{$t('Online')}}</p>
              </template>
            </ListItemMeta>
            <template slot="action">
              <li>
                <Icon type="ios-search" class="search-icon"></Icon>
              </li>
            </template>
          </ListItem>
        </List>
      </div>

      <div class="content" id="data-list-content">
        <!-- <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>

        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div> -->
        <div :class="item.uid === user.id ? 'send-box' : 'received-box'" v-for="(item,inx) in chatrecords" :key="inx">
          <Avatar size="large" icon="ios-person" :src="item.uid === user.id ? user.avatar : value.avatar" class="avatar" />
          <div class="comments">
            {{item.data}}
            <small class="text-time">{{moment(item.timestamp).format('LT')}}</small>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="textarea-box">
          <Input v-model.trim="message" size="large" :placeholder="$t('Enter something...')">
            <span slot="append">
              <Poptip v-model="smileys.visible" placement="top" width="250" title="Smileys & People">
                <Icon class="pointer" type="md-happy" size="25"></Icon>
                <div slot="content">
                  <span class="emoji-box mb-2 pointer" style="font-size: 20px;" :span="3" v-for="(item,inx) in smileys.list" @click="selectSmileys(item)" :key="inx">{{item}}</span>
                </div>
              </Poptip>
            </span>
            <span slot="append">
              <Icon class="pointer" type="ios-camera" size="25"></Icon>
            </span>
          </Input>
        </div>
        <div class="send-box">
          <Button size="large" icon="ios-paper-plane" type="primary" shape="circle" @click="sendMessage"></Button>
        </div>
      </div>
    </Row>
  </Row>
</template>

<script>
import Conf from '../config/conf.json'
import { mapState } from 'vuex'
import Cookie from 'js-cookie'

export default {
  name: 'message-setting',

  props: {
    value: Object
  },

  data () {
    return {
      message: '',
      smileys: {
        list: Conf.smileys,
        visible: false
      },
      chatrecords: []
    }
  },

  computed: {
    ...mapState({
      user: state => state.sign.user
    })
  },

  methods: {
    scrollToBottom () {
      this.$nextTick(() => {
        var div = document.getElementById('data-list-content')
        div.scrollTop = div.scrollHeight
      })
    },
    goBack () {
      this.$emit('input', {})
    },
    selectSmileys (smileys) {
      this.smileys.visible = false
      this.message += smileys
    },
    sendMessage () {
      if (this.message === '') {
        return false
      }

      this.$ws.notice.send(this.value.friend_id, this.message)
      this.chatrecords.push({
        uid: this.user.id,
        to: this.value.friend_id,
        data: this.message,
        timestamp: (new Date()).valueOf()
      })
      this.message = ''
      this.scrollToBottom()
    },
    chatrecordsData () {
      let history = Cookie.getJSON('messages-' + this.user.id)
      if (!history || typeof history[this.value.friend_id] === 'undefined') {
        this.chatrecords = []
      } else {
        this.chatrecords = history[this.value.friend_id]
      }
    },
    listens () {
      var _this = this
      this.$ws.notice.call(resp => {
        if (resp.uid === this.value.friend_id) {
          _this.chatrecords.push(resp)
          _this.scrollToBottom()
        }
      })
    }
  },

  mounted () {
    this.scrollToBottom()
    this.listens()
    this.chatrecordsData()
  }
}
</script>
