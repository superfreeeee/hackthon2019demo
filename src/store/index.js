import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: null,
    // username: 'superfree',
    devices: [],
    serverIP: 'http://localhost:8080'
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    
  },
  modules: {

  }
})
