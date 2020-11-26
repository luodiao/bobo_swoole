<template>
  <Row class="component">
    <h2 class="font-title mb-6">{{$t('Friends')}}</h2>
    <Input
      size="large"
      class="text-input mb-6"
      v-model.trim="search.friendKey"
      :placeholder="$t('Search for users...')"
      @on-enter="searchFriend">
      <template slot="append" style="">
        <Button type="primary" :loading='search.friendLoading' icon="ios-search" @click.native="searchFriend"></Button>
      </template>
    </Input>

    <Row v-if="JSON.stringify(search.result) != '{}'">
      <div class="mb-6"><Icon type="md-person-add" /> {{$t('Search result')}}</div>
      <List>
        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Avatar size="large" :src="search.result.avatar" icon="ios-person" />
            </template>
            <template slot="title">
              <h6 class="nick">
                {{search.result.nickname}}
              </h6>
            </template>
            <template slot="description">
              <p class="description">{{search.result.bio ? search.result.bio : $t('Absolutely empty.')}}</p>
            </template>
          </ListItemMeta>

          <template slot="action">
            <li>
              <Button type="text" class="text-success" @click.native="addFriends" :loading="search.addFriendLoading">{{$t('Add friends')}}</Button>
            </li>
          </template>
        </ListItem>
      </List>
    </Row>

    <Row v-if="friendsPending.length > 0">
      <div class="mb-6"><Icon type="md-notifications-outline" /> {{$t('Notifications')}}</div>
      <List>
        <ListItem class="list-item mb-6" v-for="(item,inx) in friendsPending" :key="inx">
          <ListItemMeta>
            <template slot="avatar">
              <Avatar size="large" :src="item.avatar" icon="ios-person" />
            </template>
            <template slot="title">
              <h6 class="nick">
                {{item.nickname}}
              </h6>
            </template>
            <template slot="description">
              <p class="description">{{item.bio ? item.bio : $t('Absolutely empty.')}}</p>
            </template>
          </ListItemMeta>

          <template slot="action">
            <li>
              <a class="text-success" @click="auditFriends('pass', item, inx)">{{$t('Pass')}}</a>
            </li>
            <li>
              <a class="text-danger" @click="auditFriends('reject', item, inx)">{{$t('Reject')}}</a>
            </li>
          </template>
        </ListItem>
      </List>
    </Row>

    <Row v-if="friendsList.length == 0" class="text-empty">{{$t('No friends')}}</Row>

    <Row v-for="(friends,inx) in friendsIndexes" :key="inx" v-if="friends.length > 0">
      <div class="mb-6">A</div>
      <List>
        <ListItem class="list-item mb-6" v-for="(item,key) in friends" :key="key" >
          <ListItemMeta @click.native="changeUser(item)">
            <template slot="avatar">
              <Badge>
                <Avatar size="large" :src="item.avatar" icon="ios-person" />
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                {{item.nickname}}
              </h6>
            </template>
            <template slot="description">
              <p class="description">{{item.bio ? item.bio : $t('Absolutely empty.')}}</p>
            </template>
          </ListItemMeta>

          <template slot="action">
            <li>
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)">
                  <Icon type="md-more" size="15" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem class="text-danger" @click.native="removeFriends(item, inx)">{{$t('Delete')}}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </template>
        </ListItem>
      </List>
    </Row>
  </Row>
</template>

<script>
import Conf from '../config/conf.json'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'adderss-view',

  props: {
    value: Object
  },

  data () {
    return {
      search: {
        friendKey: '',
        friendLoading: false,
        addFriendLoading: false,
        result: {}
      }
    }
  },

  computed: {
    ...mapState({
      friendsList: state => state.friends.friendsList,
      friendsPending: state => state.friends.friendsPending
    }),
    friendsIndexes () {
      let indexes = JSON.parse(JSON.stringify(Conf.indexes))

      this.friendsList.forEach(row => {
        if (indexes[row.initial]) {
          indexes[row.initial].push(row)
        } else {
          indexes['#'].push(row)
        }
      })

      return indexes
    }
  },

  methods: {
    ...mapActions(['findUser', 'friendsAdd', 'friendsTask', 'friendsRemove']),
    init () {
      this.search = {
        friendKey: '',
        friendLoading: false,
        addFriendLoading: false,
        result: {}
      }
    },
    searchFriend () {
      if (this.search.friendKey === '') {
        return false
      }

      this.search.friendLoading = true
      this.findUser({account: this.search.friendKey}).then(res => {
        return res.body
      }).then(res => {
        this.search.friendLoading = false
        if (res.code === 0) {
          this.$Message.warning(res.msg)
          return false
        }

        this.search.result = res.data
      })
    },
    addFriends () {
      this.$set(this.search, 'addFriendLoading', true)

      this.friendsAdd({account: this.search.result.username}).then(res => {
        return res.body
      }).then(res => {
        this.$set(this.search, 'addFriendLoading', false)
        if (res.code === 0) {
          this.$Message.error(res.msg)
          return false
        }

        this.init()
        this.$Message.success(res.msg)
      })
    },
    auditFriends (type, row, inx) {
      this.friendsTask({
        id: row.id,
        action: type
      }).then(res => {
        return res.body
      }).then(res => {
        if (res.code === 0) {
          this.$Message.error(res.msg)
          return false
        }

        if (type === 'reject') {
          this.friendsPending.splice(inx, 1)
          this.$Message.success(this.$t('Setup succeeded'))
          return false
        }

        if (type === 'pass') {
          this.friendsList.push(row)
          this.friendsPending.splice(inx, 1)
          this.$Message.success(this.$t('Setup succeeded'))
          return false
        }
      })
    },
    removeFriends (row, inx) {
      this.friendsRemove({id: row.friend_id}).then(res => {
        return res.body
      }).then(res => {
        if (res.code === 0) {
          this.$Message.error(res.msg)
          return false
        }

        this.friendsList.splice(inx, 1)
        this.$Message.success(this.$t('Setup succeeded'))
      })
    },
    changeUser (user) {
      this.$emit('input', user)
    }
  },

  created () {
    this.init()
  }
}
</script>
