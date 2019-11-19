import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div :class="{active: isActive}">
      <p :class="{active: !isActive}">{{text}}</p>
      <p :class="[{active: isActive,whah: isActive}]">{{isActive?Date.now():''}}</p>
      <p v-html="html" v-on:click="handleClick"></p>
      <p :style="[styles, styles2]">{{arr.join('-')}}</p>
    </div>
  `,
  data: {
    text: '你好啊',
    isActive: true,
    html: '<p>我是HTML</p>',
    arr: [1, 2, 3],
    styles: {
      color: 'red'
    },
    styles2: {
      fontSize: '60px'
    }
  },
  methods: {
    handleClick () {
      alert('哇哈哈')
    }
  }
})
