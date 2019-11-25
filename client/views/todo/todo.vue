<template>

  <section class="real-app">
      <input type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下来要做什么？"
        @keyup.enter="addTodo"
      />
      <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @deleteTodo="deleteTodo"
      />
      <Tabs
      :todos="todos"
      :filter="filter"
      @toggleFilter="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
      />
  </section>
</template>

<script>
import Tabs from './tabs.vue'
import Item from './item.vue'

let id = 0

export default {
  props: ['id'], // 这个id可接收路由传递过来的id
  metaInfo: {
    title: 'The Todo App'
  },
  // beforeRouteEnter (to, from, next) {
  //   window.console.log('页面级的 beforeRouteEnter')
  //   next(vm => {
  //     window.console.log('After enter vm.id is', vm.id)
  //   })
  // },
  // beforeRouteUpdate (to, from, next) {
  //   console.log('todo update enter------------>', this.id)
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log('todo leave enter')
  //   const r = global.confirm('确认离开?')
  //   if (r === true) {
  //     next()
  //   }
  // },
  components: {
    Tabs, Item
  },
  data () {
    return {
      todos: [],
      filter: '所有'
    }
  },
  computed: {
    filteredTodos: function () {
      if (this.filter === '所有') {
        return this.todos
      }
      if (this.filter === '已完成') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos.filter(todo => !todo.completed)
    }
  },
  methods: {
    addTodo: function (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo: function (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    clearAllCompleted: function () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    toggleFilter: function (state) {
      window.console.log(state)
      this.filter = state
    }
  }
}
</script>

<style lang="stylus">
.real-app
    box-shadow 0 0 5px #666
    width 600px
    text-align center
    margin 0 auto
    .add-input
        width 100%
        border 0
        height 40px
        padding 10px
        font-size 30px
        outline: none;
</style>
