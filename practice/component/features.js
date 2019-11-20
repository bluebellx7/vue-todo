import Vue from 'vue'

const slotComp = {
  template: `
    <div>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <slot name="footer" :value="value" aaa="111"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      value: 'comp value'
    }
  }
}

new Vue({
  el: '#root',
  components: {
    SlotComp: slotComp
  },
  template: `
    <div>
      <SlotComp>
        <p slot='header'>这是header</p>
        <p slot='body'>这是body</p>
        <p slot='footer' slot-scope="props">这是footer,footer 的aaa{{props.aaa}},{{props.value}}</p>
      </SlotComp>
    </div>
  `
})
