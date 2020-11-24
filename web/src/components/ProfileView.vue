<template>
  <Row class="component">
    <h2 class="font-title mb-6">{{$t('Profile')}}</h2>
    <Card class="profile-box mb-6">
      <div style="text-align:center">
        <Avatar icon="ios-person" :src="user.avatar" size="large" class="mb-6"></Avatar>
        <h3 class="nick">{{user.nickname}}</h3>
        <p class="text-decoration pointer" @click="showModal('bio')">{{user.bio ? user.bio : $t('Absolutely empty.')}}</p>
      </div>
    </Card>

    <Card class="profile-box mb-6" :padding="0" :bordered="false" dis-hover>
      <CellGroup>
        <Cell :title="$t('Username')" :label="user.username" disabled>
          <template slot="extra">
            <Icon type="ios-contact-outline" size="18" />
          </template>
        </Cell>

        <Cell :title="$t('Mobile')" :label="user.mobile ? user.mobile : $t('Not set.')" disabled>
          <template slot="extra">
            <Icon type="ios-phone-portrait" size="18" />
          </template>
        </Cell>

        <Cell :title="$t('Email')" :label="user.email ? user.email : $t('Not set.')" @click.native="showModal('email')">
          <template slot="extra">
            <Icon type="ios-mail-outline" size="18" />
          </template>
        </Cell>

        <Cell :title="$t('Gender')" :label="genderText" @click.native="showModal('gender')">
          <template slot="extra">
            <Icon type="ios-transgender" size="18" />
          </template>
        </Cell>

        <Cell :title="$t('Birthday')" :label="user.birthday ? user.birthday : $t('Not set.')" @click.native="showModal('birthday')">
          <template slot="extra">
            <Icon type="ios-calendar-outline" size="18" />
          </template>
        </Cell>
      </CellGroup>
    </Card>

    <Modal v-model="modal" :title="$t('Setting')">
      <Input v-model.trim="currentValue" size="large" class="text-input" :placeholder="$t('Absolutely empty.')" v-if="currentFiled == 'bio'" />
      <DatePicker v-model.trim="currentValue" size="large" style="width: 100%;" class="text-input" type="date" :placeholder="$t('Birthday')" v-if="currentFiled == 'birthday'"></DatePicker>
      <Input v-model.trim="currentValue" type="email" size="large" class="text-input" :placeholder="$t('Email')" v-if="currentFiled == 'email'" />
      <Select v-model.number="currentValue" size="large" class="text-select" style="width:100%;" :placeholder="$t('Gender')" v-if="currentFiled == 'gender'">
        <Option :value="0" :key="0">{{$t('Unknown')}}</Option>
        <Option :value="1" :key="1">{{$t('Male')}}</Option>
        <Option :value="2" :key="2">{{$t('Female')}}</Option>
      </Select>

      <template slot="footer">
        <Button type="text" @click="cancelModal">{{$t('Cancel')}}</Button>
        <Button type="primary" :loading="modalLoading" @click="saveProfile">{{$t('Save')}}</Button>
      </template>
    </Modal>
  </Row>
</template>

<script>
import Cookie from 'js-cookie'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'profile-view',

  data () {
    return {
      modal: false,
      modalLoading: false,
      currentFiled: '',
      currentValue: ''
    }
  },

  computed: {
    ...mapState({
      user: state => state.sign.user
    }),
    genderText () {
      switch (this.user.gender) {
        case 0:
          return this.$t('Unknown')
        case 1:
          return this.$t('Male')
        case 2:
          return this.$t('Female')
        default:
          return this.$t('Not set.')
      }
    }
  },

  methods: {
    ...mapActions(['setProfile']),
    showModal (type) {
      this.currentFiled = type
      this.currentValue = this.user[type]
      this.modal = true
    },
    cancelModal () {
      this.currentFiled = ''
      this.currentValue = ''
      this.modal = false
    },
    saveProfile () {
      if (this.currentFiled === 'email') {
        var pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/
        if (!pattern.test(this.currentValue)) {
          this.$Message.warning(this.$t('The email format is incorrect'))
          return false
        }

        this.user.email = this.currentValue
      }

      if (this.currentFiled === 'birthday') {
        this.user.birthday = this.currentValue === '' ? '' : this.moment(this.currentValue).format('YYYY-MM-DD')
      }

      if (this.currentFiled === 'gender') {
        this.user.gender = this.currentValue
      }

      if (this.currentFiled === 'bio') {
        this.user.bio = this.currentValue
      }

      this.modalLoading = true
      let data = {
        nickname: this.user.nickname,
        bio: this.user.bio,
        gender: this.user.gender,
        email: this.user.email,
        birthday: this.user.birthday
      }
      if (this.user.avatar.indexOf('data:') === -1) {
        data.avatar = this.user.avatar
      }
      this.setProfile(data).then(res => {
        return res.body
      }).then(res => {
        this.modalLoading = false

        if (res.code === 0) {
          this.$Message.error(res.msg)
          return false
        }

        Cookie.set('user', this.user, { expires: 7 })
        this.$Message.success(this.$t('Setup succeeded'))
        this.modal = false
      })
    }
  }
}
</script>
