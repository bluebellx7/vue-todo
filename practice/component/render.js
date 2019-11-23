import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //     <slot name="footer"></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => { this.$emit('click') }
      }
    }, [
      this.$slots.default,
      this.$slots.footer,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
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
      value: '123',
      props1: '传递给组件的'
    }
  },
  // template: `
  //   <comp-one ref="comp" :props1="props1">
  //     <span ref="span">{{value}}</span>
  //     <span slot="footer">footer slot</span>
  //   </comp-one>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.props1
        },
        on: {
          click: this.handleClick
        },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            attrs: {
              id: 'test-id'
            }
          },
          this.value
        ),
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'footer'
          },
          'footer slot111'
        )
      ])
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
})
