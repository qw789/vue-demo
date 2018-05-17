import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//这种路由是一种懒加载，不需要再页面引入
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/hello',
      meta: { title: '你好' },
      name: 'hello',
      component: (resolve) => require(['../pages/index.vue'], resolve)
    },
    {
      path: '/websocket',
      meta: { title: '用websocket聊天' },
      name: 'websocket',
      // component: (resolve) => require(['../pages/websocket.vue'], resolve)
      component: () => import('../pages/websocket.vue')
    },
    {
      path: '/test',
      meta: { title: '测试页面也很霸气' },
      name: 'test',
      component: (resolve) => require(['../pages/test.vue'], resolve),
      children: [
        {
          path: 'test1',
          meta: { title: '测试页面1' },
          name: 'test1',
          component: (resolve) => require(['../pages/test/test1.vue'], resolve)
        },
        {
          path: 'test2',
          meta: { title: '测试页面2' },
          name: 'test2',
          component: (resolve) => require(['../pages/test/test2.vue'], resolve)
        },
        {
          path: 'test4',
          meta: { title: '测试页面4' },
          name: 'test4',
          component: (resolve) => require(['../pages/test/test4.vue'], resolve)
        }
      ]
    },
    {
      path: '*',
      redirect: '/hello'
    }
  ]
})
