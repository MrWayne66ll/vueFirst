// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入定义的todolist的vue文件，包含的是vue的组件
import TodoList from './TodoList'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { TodoList },   // 在最大的组件下面注册页面组件
  template: '<TodoList/>'
})
