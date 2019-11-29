<template>
  <div id="app">
    <div id="cover"></div>
    <router-link to="/login">login</router-link>
    <router-link to="/route-test">/route-test</router-link>
    <h1>vuexStateCount:{{ vuexStateCount }}</h1>
    <h1>fullName:{{ fullName }}</h1>
    <h1>aText:{{ aText }}</h1>
    <h1>bText:{{ bText }}</h1>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <Header :title="title"></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapMutations, mapGetters, mapActions, mapState
} from 'vuex'
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
  mounted () {
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // let i = 1
    // setInterval(() => {
    //   // this.$store.state.count++
    //   this.updateCount({
    //     num: i++,
    //     num1: 2
    //   })
    // }, 1000)
    this['a/add']()
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      rootCount: (state) => state.count,
      aText: (state) => state.a.text,
      bText: (state) => state.b.text
    }),
    ...mapGetters(['fullName']),
    vuexStateCount () {
      return this.$store.state.count
    }
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>
<style lang="stylus" scoped>
a {
  color: white;
}

#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: white;
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
