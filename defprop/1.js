function defineReactive (obj, key, val) {
  console.log(obj, key, val)

  Object.defineProperty(obj, key, {
    get () {
      console.log('get了', val)
      return val
    },
    set (v) {
      if (v !== val) {
        console.log('set了', key, ':' + v)
        val = v
      }
    }
  })
}
const obj = { foo: 'foovalue', data: { child: 'datachild' } }

defineReactive(obj, 'fo1o', 'foovalue')
obj.fo1o
