<template>
  <Row class="message">
    <Row v-if="JSON.stringify(value) == '{}'" class="none">BoBo swoole</Row>

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
                  {{value.nick}}
                </h6>
              </template>
              <template slot="description">
                <p class="description"><Badge :status="value.online ? 'success' : 'default'"></Badge>Online</p>
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

      <div class="content">content</div>

      <div class="footer">
        <div class="textarea-box">
          <Input size="large" placeholder="Enter something...">
            <span slot="append"><Icon type="md-happy" size="25"></Icon></span>
            <span slot="append"><Icon type="ios-camera" size="25"></Icon></span>
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
export default {
  name: 'message-setting',

  props: {
    value: Object
  },

  methods: {
    goBack () {
      this.$emit('input', {})
    }
  }
}
</script>

<style lang="scss">
  .none {
    text-align: center;
    margin-top: 10%;
    font-size: 20px;
    font-weight: 500;
    color: #e8eaec;
  }
</style>
