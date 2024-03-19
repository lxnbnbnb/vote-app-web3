import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import './style.less'

const app= createApp(App)


app.use(router)
app.mount('#app')