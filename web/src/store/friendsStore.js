import API from '../api'

export default {
  state: {
    friends: {}
  },

  mutations: {
    friendsList (state, result) {
      state.friends = result
    }
  },

  actions: {
    friendsAdd ({commit}, data) {
      return API.friendsAdd(data)
    },

    friendsList ({commit}) {
      API.friendsList().then(res => {
        return res.body
      }).then(res => {
        commit('friendsList', res.data)
      })
    }
  }
}
