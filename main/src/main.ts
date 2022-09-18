import { createApp } from 'vue'
import { createPinia } from 'pinia'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

microApp.start({
    plugins: {
    modules: {
      // appName即应用的name值
      app1: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/app1\/)/g, all => {
              return all.replace('/app1/', 'http://127.0.0.1:3001/app1/')
            })
          }

          return code
        }
      }],
      // appName即应用的name值
      app2: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/app2\/)/g, all => {
              return all.replace('/app2/', 'http://127.0.0.1:3002/app2/')
            })
          }

          return code
        }
      }]
    }
  }
})