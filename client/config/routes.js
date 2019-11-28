
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id', // /app/xxx
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.b }),

    // 懒加载 https://blog.csdn.net/weixin_33768153/article/details/80454292
    component: import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'This is app',
      description: 'meta 描述信息'
    },
    beforeEnter (to, from, next) {
      window.console.log('进入该路由之前执行的钩子..')
      next()
    }
  },
  {
    path: '/login',
    component: import('../views/login/login.vue')
  },
  // 子路由测试
  {
    path: '/route-test',
    component: resolve => require(['../views/router-test/page.vue'], resolve),
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: resolve => require(['../views/router-test/page1.vue'], resolve)
      },
      {
        path: 'page2/:id',
        props: true,
        name: 'page2',
        component: resolve => require(['../views/router-test/page2.vue'], resolve)
      }
    ]
  }
]
