<template>
  <div class="login-box">
    这是Page2,id 是 {{this.id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  metaInfo: {
    title: 'The Page 2,ID:'
  },
  beforeRouteEnter (to, from, next) {
    window.console.log('Page2:beforeRouteEnter')
    next(vm => {
      window.console.log('Page2:After enter vm.id is', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    document.title = 'ID: ' + this.id
    console.log('Page2:todo update enter------------>', this.id)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('Page2:todo leave enter')
    const r = global.confirm('确认离开?')
    if (r === true) {
      next()
    }
  }
}
</script>

<style lang="stylus">
.login-box
  text-align center
  color red
  font-size 80px
</style>
