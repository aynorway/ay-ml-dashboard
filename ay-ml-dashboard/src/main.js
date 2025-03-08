import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'
import '@/assets/css/index.css' 
import DataVVue3 from '@kjgl77/datav-vue3'

// createApp(App).use(router).mount('#app')

// 全局注册路由和 DataVVue3 插件
const app = createApp(App)

app.use(router)
app.use(DataVVue3)

app.mount('#app')