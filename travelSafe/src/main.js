import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 将自动注册所有组件为全局组件
import dataV from '@kjgl77/datav-vue3'
let app = createApp(App)
app.use(dataV)

app.mount('#app')

