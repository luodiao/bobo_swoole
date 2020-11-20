<template>
  <Row class="component">
    <h2 class="font-title mb-6">Chats</h2>
    <Input size="large" class="text-input mb-6" placeholder="Search for messages or users..." suffix="ios-search" />
    <List>
      <ListItem class="list-item mb-6" v-for="(item,inx) in setting.items" :key="inx">
        <ListItemMeta>
          <template slot="avatar">
            <Badge :dot="item.dot">
              <Avatar size="large" icon="ios-person" :src="item.avatar" />
            </Badge>
          </template>
          <template slot="title">
            <h6 class="nick">
              {{item.nick}}
              <small>{{item.datetime}}</small>
            </h6>
          </template>
          <template slot="description">
            <p class="description">{{item.description}}</p>
          </template>
        </ListItemMeta>
      </ListItem>
    </List>
  </Row>
</template>

<script>
export default {
  name: 'message-view',

  props: {
    value: Object
  },

  data () {
    return {
      setting: this.value
    }
  },

  created () {
  }
}
</script>

<style>

</style>
