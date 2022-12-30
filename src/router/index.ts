/*
 * @Author: You
 * @Date: 2022-12-30 14:24:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-30 14:48:49
 * @FilePath: \examsf:\Protest\newyear\src\router\index.ts
 */
// import { createRouter, createWebHashHistory } from 'vue-router'
// export default createRouter({
//   // 指定路由模式
//   history: createWebHashHistory(),
//   // 路由地址
//   routes: []
// })

import { createWebHistory, RouteRecordRaw } from 'vue-router';
import { createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/love'),
  routes: [
    {
			path: "/",
			redirect: "/home"
		},
    {
			path: "/home",
      name:"home",
			component: () => import("../views/home/index.vue"), // 使用懒加载
		},
    {
      path: "/index",
      name: "index",
      component: () => import("../views/index/index.vue"), // 使用懒加载
      meta:{
        keepAlive:true
      }
    }
  ],
});
//拦截
router.beforeEach((to, from, next) => {
    next()
})





export default router;