
class Kvue {
  constructor (options) {
    this.$options = options
    this.$data = options.data
    observe(this.$data)
    proxy(this, '$data')
  }
}
class Observer {
  constructor (value) {
    this.value = value

    if (typeof value === 'object') {
      this.walk(value)
    }
  }

  walk (obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

function proxy (vm, sourceKey) {
  Object.keys((vm[sourceKey])).forEach(key => {
    Object.defineProperty(vm, key, {
      get () {
        return vm[sourceKey][key]
      },
      set (newVal) {
        vm[sourceKey][key] = newVal
      }
    })
  })
}

function defineReactive (obj, key, val) {
  observe(val)

  Object.defineProperty(obj, key, {
    get () {
      console.log('get了', val)
      return val
    },
    set (v) {
      if (v !== val) {
        console.log('set了', key, ':' + v)
        observe(v)
        val = v
      }
    }
  })
}
function observe (obj) {
  // console.log(typeof obj !== 'object' || obj === null, obj)
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  // eslint-disable-next-line no-new
  new Observer(obj)
}
