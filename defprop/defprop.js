/*eslint-disable*/
const obj = { foo: 'foovalue', data: { child: 'datachild' }, newObj: '' }
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
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function set (obj, key, val) {
  defineReactive(obj, key, val)
}

observe(obj)

// obj.foo
// obj.foo = 'wwwwww'
// obj.data
// obj.newObj = { test: 'test' }
// obj.newObj.test = Date.now()
set(obj,'data.child2',  'data.child22222222')
obj.data.child2
