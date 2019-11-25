<template>
  <div id="app">
    <div id="cover"></div>
    <Header :title="title"></Header>

    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link> -->
    <router-link to="/route-test">/route-test</router-link>

    <Todo></Todo>
    <Footer></Footer>
    <transition name="fade" mode="out-in">
     <router-view />
    </transition>

  </div>
</template>

<script>
import Header from './layout/header.vue'
import Todo from './views/todo/todo.vue'
import Footer from './layout/footer.jsx'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data () {
    return {
      title: 'hello vue woool '
    }
  },
  created () {
    window.console.log('123')
    // window.console.log(process.env.NODE_ENV)
    // window.console.log(webpackName1)
  }
}
</script>
<style lang="stylus" scoped>
a
  color white
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.5;
  z-index: -1;
}
</style>
