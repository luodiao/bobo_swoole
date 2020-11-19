<template>
  <Row class="component">
    <h2 class="font-title mb-6">Friends</h2>
    <Input size="large" class="text-input mb-6" placeholder="Search for messages or users..." suffix="ios-search" />
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
                <small>16:10 pm</small>
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
                <small>16:10 pm</small>
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
                <small>16:10 pm</small>
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
                <small>16:10 pm</small>
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
                <small>16:10 pm</small>
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
export default {
  name: 'adderss-view'
}
</script>

<style>

</style>
