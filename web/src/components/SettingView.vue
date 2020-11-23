<template>
  <Row class="setting">
    <h2 class="font-title mb-6">{{$t('Setting')}}</h2>
    <div>{{$t('Themes')}}</div>
    <Row class="button-group mb-6">
      <Col :span="8" class="button" :class="{'active':theme=='light'}" @click.native="switchThemes('light')">{{$t('Light')}}</Col>
      <Col :span="8" class="button" :class="{'active':theme=='dark'}" @click.native="switchThemes('dark')">{{$t('Dark')}}</Col>
      <Col :span="8" class="button" :class="{'active':theme=='vip'}" @click.native="switchThemes('vip')">{{$t('VIP')}}</Col>
    </Row>

    <div>{{$t('Language')}}</div>
    <Row class="button-group mb-6">
      <Col :span="12" class="button" :class="{'active':language=='zh'}" @click.native="switchLanguage('zh')">{{$t('Chinese')}}</Col>
      <Col :span="12" class="button" :class="{'active':language=='en'}" @click.native="switchLanguage('en')">{{$t('English')}}</Col>
    </Row>
  </Row>
</template>

<script>
export default {
  name: 'setting-view',

  data () {
    return {
      theme: '',
      language: 'en'
    }
  },

  methods: {
    switchThemes (theme) {
      this.theme = theme
      window.document.documentElement.setAttribute('data-theme', theme)
    },
    switchLanguage (language) {
      this.language = language
      this.$i18n.locale = language
    }
  },

  created () {
    this.theme = window.document.documentElement.getAttribute('data-theme')
  }
}
</script>
