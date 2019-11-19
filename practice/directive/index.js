import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <ul>
        <li v-for="(item,index) in arr">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val,key,index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <div>
        <input type="checkbox" value="1" v-model="arr">
        <input type="checkbox" value="2" v-model="arr">
        <input type="checkbox" value="3" v-model="arr">
        <input type="checkbox" value="4" v-model="arr">
      </div>
      <input type="checkbox" v-model="active">
      <div>
        <p v-if="active">是IF</p>
        <p v-else-if="picked==='one'">是ELSEIF</p>
        <p v-else>是ELSE</p>
      </div>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    active: false
  }
})
