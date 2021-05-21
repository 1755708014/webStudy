import Vue from 'vue'
import Vuex from 'vuex'
// import Vuex from './myvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '测试'
  },
  mutations: {
    changeName (state, payload) {
      console.log(payload)
      setTimeout(function () {
        state.userName = Date.now()
      }, 1000)
    }
  },
  actions: {
    changeNameActions ({ commit }) {
      setTimeout(function () {
        commit('changeName', 'actions')
      }, 1000)
    }
  },
  modules: {
  }
})
