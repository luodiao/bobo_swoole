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

    <Row>
      <div class="mb-6"><Icon type="md-notifications-outline" /> {{$t('Notifications')}}</div>
      <List>
        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Avatar size="large" icon="ios-person" />
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>

          <template slot="action">
            <li>
              <a class="text-success" href="">{{$t('Pass')}}</a>
            </li>
            <li>
              <a class="text-danger" href="">{{$t('Reject')}}</a>
            </li>
          </template>
        </ListItem>
      </List>
    </Row>

    <Row>
      <div class="mb-6">A</div>
      <List>
        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Badge dot>
                <Avatar size="large" icon="ios-person" />
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>
        </ListItem>

        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Badge>
                <Avatar style="background-color: #ff9900" size="large">U</Avatar>
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>
        </ListItem>
      </List>
    </Row>

    <Row>
      <div class="mb-6">B</div>
      <List>
        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Badge dot>
                <Avatar size="large" icon="ios-person" />
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>
        </ListItem>

        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Badge>
                <Avatar style="background-color: #ff9900" size="large">U</Avatar>
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>
        </ListItem>

        <ListItem class="list-item mb-6">
          <ListItemMeta>
            <template slot="avatar">
              <Badge>
                <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" size="large" icon="ios-person" />
              </Badge>
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description">This is description, this is description.</p>
            </template>
          </ListItemMeta>
        </ListItem>
      </List>
    </Row>
  </Row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'adderss-view',

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

  methods: {
    ...mapActions(['findUser', 'friendsAdd']),
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
        console.log(res)
      })
    }
  },

  created () {
    this.init()
  }
}
</script>

<style lang="scss">

</style>
