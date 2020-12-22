<template>
  <Row class="component">
    <h2 class="font-title mb-6">{{$t('Chats')}}</h2>
    <Input size="large" class="text-input mb-6" :placeholder="$t('Search for messages or users...')" suffix="ios-search" />
    <List>
      <ListItem class="list-item mb-6" v-for="(item,inx) in messagesHistory" :key="inx" @click.native="changeUser(item)">
        <ListItemMeta>
          <template slot="avatar">
            <Badge :dot="item.dot">
              <Avatar size="large" icon="ios-person" :src="item.avatar" />
            </Badge>
          </template>
          <template slot="title">
            <h6 class="nick">
              {{item.nickname}}
              <small>{{moment(item.datetime).format('LT')}}</small>
            </h6>
          </template>
          <template slot="description">
            <p class="description">{{item.lastMsg}}</p>
          </template>
        </ListItemMeta>
      </ListItem>
    </List>
  </Row>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'

export default {
  name: 'message-view',

  props: {
    value: Object
  },

  computed: {
    ...mapState({
      user: state => state.sign.user,
      friends: state => state.friends.friendsList
    }),
    messagesHistory () {
      // Cookie.remove('messages-' + this.user.id)
      var messages = Cookie.getJSON('messages-' + this.user.id)
      if (!messages) {
        return []
      }
      var list = []
      this.friends.forEach(user => {
        messages.forEach((row, uid) => {
          if (user.friend_id === uid && row) {
            list.push(Object.assign(
              user,
              {
                lastMsg: row[row.length - 1].data,
                datetime: row[row.length - 1].timestamp
              }
            ))
          }
        })
      })

      return list
    }
  },

  methods: {
    changeUser (user) {
      this.$emit('input', user)
    }
  }
}
</script>

<style>

</style>
