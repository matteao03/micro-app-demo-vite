import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app2')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.unmount()
})
  
