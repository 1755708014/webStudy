let Vue
class Router {
  constructor (options) {
    this.$options = options

    Vue.util.defineReactive(this, 'current', '/')

    window.addEventListener('hashchange', this.onhashchange.bind(this))

    window.addEventListener('load', this.onhashchange.bind(this))
  }

  onhashchange () {
    this.current = window.location.hash.slice(1)
  }
}

Router.install = function (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    render (h) {
      console.log(this.$slots)
      return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render (h) {
      let component = null
      this.$router.$options.routes.forEach(route => {
        if (route.path === this.$router.current) {
          component = route.component
        }
      })
      return h(component)
    }
  })
}

export default Router
// MyPlugin.install = function (Vue, options) {
//   // 1. 添加全局方法或 property
//   Vue.myGlobalMethod = function () {
//     // 逻辑...
//   }
//
//   // 2. 添加全局资源
//   Vue.directive('my-directive', {
//     bind (el, binding, vnode, oldVnode) {
//       // 逻辑...
//     }
//     ...
//   })
//
//   // 3. 注入组件选项
//   Vue.mixin({
//     created: function () {
//       // 逻辑...
//     }
//     ...
//   })
//
//   // 4. 添加实例方法
//   Vue.prototype.$myMethod = function (methodOptions) {
//     // 逻辑...
//   }
// }
