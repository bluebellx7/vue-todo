import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'

// import './assets/images/bg.jpg'
// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'

import createRouter from './config/router'
import createSotre from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createSotre()

router.beforeEach((to, from, next) => {
  window.console.log('全局路由钩子：beforeEach')
  next()
  // // 可用于判断是否登录
  // const isAuth = true
  // if (!isAuth) {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
