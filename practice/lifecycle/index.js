import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>{{text}}</div>
  `,
  data: {
    text: '你好啊'
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this.$el, 'beforeUpdate')
  },
  updated () {
    console.log(this.$el, 'updated')
  },
  activated () {
    console.log('activated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
})
