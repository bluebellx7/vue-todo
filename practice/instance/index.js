import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}}</div>',
  data: {
    text: '哇哈哈',
    obj: {
      a: '我是A'
    }
  }
})

app.$mount('#root')

app.text = 1

setInterval(() => {
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.$data.text += 1
  app.$set(app.obj, 'a', app.text)
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// app.$options.render = (h) => {
//   return h('div', {}, '<div>new render</div>')
// }

console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$refs.div.innerHTML)
console.log(app.$isServer)

app.$watch('text', (newVal, oldVal) => {
  console.log('newVal:', newVal, '|oldVal:', oldVal)
})

app.$on('test', (arg) => {
  console.log('test emit!!!!', arg)
})

app.$emit('test', '我是参数')

// 重新渲染
// app.$forceUpdate()

app.$nextTick(() => {

})
