<template>
  <div class="helper">
      <span class="left">
          {{unFinishedTodoLength}}项未完成
      </span>

      <span class="tabs">
          <span v-for="state in states" :key="state"
            :class="[state, filter === state ? 'actived' : '']"
           @click="toggleFilter(state)">{{state}}</span>
      </span>

      <span class="clear" @click="clearAllCompleted">
          清除所有完成项
      </span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      states: ['所有', '未完成', '已完成']
    }
  },
  computed: {
    unFinishedTodoLength: function () {
      return this.todos.filter(todo => todo.completed === false).length
    }
  },
  methods: {
    clearAllCompleted: function () {
      this.$emit('clearAllCompleted')
    },
    toggleFilter: function (state) {
      this.$emit('toggleFilter', state)
    }
  }
}
</script>

<style lang="stylus" scoped>
hr
    color #efefef
    border-width  1px
.helper
    background-color white
    padding 10px
    width 100%
    font-size 18px
.left
    text-align left
    width 140px
    display inline-block
.tabs
    width 300px
    text-align center
    display inline-block
    .actived
        border: 1px solid #ef8b8b;
        background-color: antiquewhite;
        border-radius 3px
    span
        padding 3px
        cursor pointer
.clear
    text-align right
    width 140px
    display inline-block
    cursor pointer
</style>
