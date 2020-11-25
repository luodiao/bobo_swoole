import API from '../api'

export default {
  state: {
  },

  mutations: {
    // setUser (state, result) {
    //   state.user = result
    // }
  },

  actions: {
    friendsAdd ({commit}, data) {
      return API.friendsAdd(data)
    }
  }
}
