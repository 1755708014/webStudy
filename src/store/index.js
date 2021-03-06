import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '测试'
  },
  mutations: {
    changeName (state, payload) {
      setTimeout(function () {
        state.userName = 'mutations延时' + payload
      }, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
