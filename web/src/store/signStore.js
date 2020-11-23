import API from '../api'

export default {
  state: {
    user: {}
  },

  mutations: {
    setUser (state, result) {
      state.user = result
    }
  },

  actions: {
    setUser ({commit}, user) {
      commit('setUser', user)
    },

    signIn ({commit}, data) {
      return API.signIn(data)
    },

    signUp ({commit}, data) {
      return API.signUp(data)
    }
  }
}
