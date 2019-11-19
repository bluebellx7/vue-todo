import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>{{text}}</p>
      <p>{{getName}}</p>
      <p>{{number}}</p>
      <p>{{getName2()}}</p>
      <p><input type='text' v-model='firstName'></p>
    </div>
  `,
  created () {
    setInterval(() => {
      this.number++
      // 这里刷新页面数据的时候getName2()会执行
    }, 1000)
  },
  data: {
    firstName: 'Nick',
    lastName: 'HH',
    text: '你好哈！',
    number: 0
  },
  computed: {
    getName () {
      console.log('getName1')
      return `${this.firstName}  ${this.lastName}`
    }
  },
  methods: {
    getName2 () {
      console.log('getName2')
      return `${this.firstName}  ${this.lastName}`
    }
  }
})
