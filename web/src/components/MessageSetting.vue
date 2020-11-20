<template>
  <Row class="message">
    <div class="header">
      <div class="back"><Icon type="ios-arrow-back" class="search-icon"></Icon></div>
      <List class="header-bar">
        <ListItem>
          <ListItemMeta>
            <template slot="avatar">
              <Avatar size="large" icon="ios-person" class="avatar" />
            </template>
            <template slot="title">
              <h6 class="nick">
                Bootstrap Themes
              </h6>
            </template>
            <template slot="description">
              <p class="description"><Badge status="success"></Badge>Online</p>
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
</template>

<script>
export default {

}
</script>
