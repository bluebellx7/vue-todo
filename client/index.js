import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

// 全局样式
import './assets/styles/global.styl'

// import './assets/images/bg.jpg'
// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'

// 容易注册、引入路由和vuex
import createRouter from './config/router'
import createSotre from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createSotre()

// // 动态注册module
// store.registerModule('module1', {
//   state: {
//     text: '测试动态注册模型'
//   }
// })

// // 第一个参数相当于一个getter，当state.count变化 触犯第二个参数方法
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('监听state数据变化：', newCount)
// })

// // 订阅mutation，就是当调用mutation方法时就会触发该方法
// store.subscribe((mutation, state) => {
//   console.log('调用的mutation方法名：', mutation.type)
//   console.log('调用该mutation传递的参数：', mutation.payload)
// })

// // 订阅action，就是当调用action方法时就会触发该方法
// store.subscribeAction((action, state) => {
//   console.log('调用的Action方法名：', action.type)
//   console.log('调用该Action传递的参数：', action.payload)
// })

// 路由相关的全局钩子
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

// router.beforeResolve((to, from, next) => {
//   console.log('before resolve invoked')
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('after each invoked')
// })

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
