/*
 * @Author: You
 * @Date: 2022-12-30 13:43:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-30 16:33:10
 * @FilePath: \examsf:\Protest\newyear\src\main.ts
 */
import { createApp } from 'vue'
import router from './router';
import './style.css'
import App from './App.vue'
import 'amfe-flexible'
const app = createApp(App)
app.use(router)
app.mount('#app')
