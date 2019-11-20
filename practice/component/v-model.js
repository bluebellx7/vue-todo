import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      msg: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="msg"></comp-one>
      <comp-one
        :value1="msg"
        @change="val => { msg = val }"
      ></comp-one>
    </div>
  `
  // 上面两个comp-one是等价的
})
