let Vue
class Store {
  // eslint-disable-next-line no-useless-constructor
  constructor (options) {
    console.log(options)
    this._mutations = options.mutations
    this._actions = options.actions
    this.state = new Vue({
      data: options.state
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  commit (type, payload) {
    console.log(this)
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}
function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}
export default {
  Store,
  install
}
