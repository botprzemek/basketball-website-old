import { createApp } from 'vue'
import router from '@/router/router'
import App from './App.vue'
import './registerServiceWorker'

createApp(App)
    .use(router)
    .mount('body')
