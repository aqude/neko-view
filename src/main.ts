import { createApp }        from 'vue'
import {createPinia} from 'pinia'
import './css/style.css'
import App from './App.vue'
import {router}             from "./router/main.ts";


const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router)
app.mount('#app')

