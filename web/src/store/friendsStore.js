import API from '../api'

export default {
  state: {
    friendsPending: {},
    friendsList: {}
  },

  mutations: {
    friendsList (state, result) {
      state.friendsPending = result.pending
      state.friendsList = result.list
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
