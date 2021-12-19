import { createApp } from 'vue'



import App from './App.vue' // 引入挂载dom
import router from './router' // 引入路由并use()
createApp(App).use(router).mount('#app')
