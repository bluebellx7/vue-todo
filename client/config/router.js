import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) { // 回退的时候滚动条滚至上次浏览的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    // fallback: true,
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
