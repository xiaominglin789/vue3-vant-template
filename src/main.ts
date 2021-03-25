import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import 'lib-flexible'

const app = createApp(App)

// vant组件注册
import { Button } from 'vant'
app.use(Button)

app.use(store).use(router).mount('#app')

console.log(process.env.VUE_APP_APPLICATION)
