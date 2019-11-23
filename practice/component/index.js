import './render'

// import Vue from 'vue'

// /*
// 在 vue 项目中，我们有了初始化的根实例后，
// 所有页面基本上都是通过 router 来管理，组件也是通过 import 来进行局部注册，
// 所以组件的创建我们不需要去关注，相比 extend 要更省心一点点。
// 但是这样做会有几个缺点：
// 1.组件模板都是事先定义好的，如果我要从接口动态渲染组件怎么办？
// 2.所有内容都是在 #app 下渲染，注册组件都是在当前位置渲染。如果我要实现一个类似于 window.alert() 提示组件要求像调用 JS 函数一样调用它，该怎么办？

// 这时候，Vue.extend + vm.$mount 组合就派上用场了。
//  */

// // 创建构造器
// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// // 创建 Profile 实例，并挂载到一个元素上。
// new Profile().$mount('#root')
