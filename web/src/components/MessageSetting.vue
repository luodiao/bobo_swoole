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

      <div class="content">
        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
        </div>

        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
        </div>

        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
        </div>

        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
        </div>

        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="received-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
        </div>

        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments">
            123123123123123123123123123123123123123123123123
            <small class="text-time">12:00</small>
          </div>
        </div>
        <div class="send-box">
          <Avatar size="large" icon="ios-person" :src="value.avatar" class="avatar" />
          <div class="comments"><div class="arrow"></div>123</div>
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
          <Button size="large" icon="ios-paper-plane" type="primary" shape="circle"></Button>
        </div>
      </div>
    </Row>
  </Row>
</template>

<script>
import Conf from '../config/conf.json'

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
      }
    }
  },

  methods: {
    goBack () {
      this.$emit('input', {})
    },
    selectSmileys (smileys) {
      this.smileys.visible = false
      this.message += smileys
    }
  }
}
</script>
