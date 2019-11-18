<template>
  <header :class="$style['main-header']">
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" module>
.main-header{
  text-align center
  h1{
    font-size 67px
    color: rgba(255, 255, 255, 0.7)
    font-weight 900
    margin 20px
  }
}
</style>
