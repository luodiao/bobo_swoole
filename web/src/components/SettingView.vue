<template>
  <Row class="setting">
    <h2 class="font-title mb-6">Profile</h2>
    <div>Themes</div>
    <Row class="button-group mb-6">
      <Col :span="8" class="button" :class="{'active':theme=='light'}" @click.native="switchThemes('light')">Light</Col>
      <Col :span="8" class="button" :class="{'active':theme=='dark'}" @click.native="switchThemes('dark')">Dark</Col>
      <Col :span="8" class="button" :class="{'active':theme=='vip'}" @click.native="switchThemes('vip')">VIP</Col>
    </Row>

  </Row>
</template>

<script>
export default {
  name: 'setting-view',

  data () {
    return {
      theme: 'light'
    }
  },

  methods: {
    switchThemes (theme) {
      this.theme = theme
      window.document.documentElement.setAttribute('data-theme', theme)
    }
  }
}
</script>
