<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
      <input type="checkbox"
        class="toggle"
        v-model="todo.completed"
      />
      <label>
          {{todo.content}}
      </label>
      <button class="destroy" @click="deletTodo">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletTodo: function () {
      this.$emit('deleteTodo', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item{
  width 100%
  height 40px
  line-height 40px
  padding 10px
  position relative
  background-color #fff
  font-size 24px
  border-bottom 1px solid rgba(0,0,0,0.06)
  &:hover{
    .destory:after{
      content: '×'
    }
  }

  .toggle{
    width: 40px;
    height: 40px;
    margin: auto 0;
    border: none;
    appearance: none;
    outline none
    float left
    &:after{
        content url('../../assets/images/round.svg')
    }
    &:checked:after{
        content url('../../assets/images/done.svg')
    }
  }
  label{
      float left
      margin-left 10px
      height: 40px;
      line-height: 40px;
  }
  &.completed{
    label{
      color: #d9d9d9;
      text-decoration line-through
    }
  }
}
.destroy{
  float right
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color transparent
  appearance none
  border-width 0
  cursor pointer
  outline none
}
</style>
