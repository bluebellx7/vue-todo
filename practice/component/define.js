import Vue from 'vue'

const comp = {
  props: {
    active: {
      type: Boolean,
      required: true
      // validator (value) {
      //   return typeof value === 'boolean'
      // }
    },
    propOne: String,
    propTwo: {
      validator (value) {
        return value.length > 5
      }
    }
  },
  template: `
    <div>
      <input type='text' v-model='text'>
      <p @click="handleChange">{{propOne}}</p>
      <p v-show="active">see me if active</p>
      <p>{{propTwo}}</p>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: comp
  },
  template: `
    <div>
      <CompOne
        :active="active"
        :propOne='propOne'
        :propTwo='propTwo'
        @change='handleChange'
      ></CompOne>
      <comp-one
      :active="!active"
      :propOne='propOne'
      :propTwo='propTwo'
      @change='handleChange'
      ></comp-one>
    </div>
  `,
  data: {
    active: true,
    propOne: '这是propOne',
    propTwo: 'propTwo要大于5个字符'
  },
  methods: {
    handleChange () {
      // child通过emit修改parent的属性
      this.propOne += Math.random()
      this.propTwo += Math.random()
      console.log('点击到了！！')

      // eslint-disable-line
      // 测试extend
      const Layer = Vue.extend({
        props: {
          msg: String
        },
        template: '<div :style="[styles]">{{msg}}{{ text }},{{time}}秒后关闭！</div>',
        data: function () {
          return {
            time: 4,
            text: 'extend test',
            styles: {
              postion: 'absolute',
              width: '300px',
              height: '200px',
              bottom: '0',
              right: '0',
              'background-color': 'red',
              color: 'white'
            }
          }
        },
        mounted () {
          const interval = setInterval(() => {
            if (this.time === 1) {
              this.$destroy(true)
              this.$el.parentNode.removeChild(this.$el)
              clearInterval(interval)
            }
            this.time--
          }, 1000)
        }
      })
      const layerComp = new Layer({
        propsData: {
          msg: Math.random()
        }
      }).$mount()
      document.body.appendChild(layerComp.$el)
    }
  }
})
