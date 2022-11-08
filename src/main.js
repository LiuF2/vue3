import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router'
// import defineConfig from '../vite.config.js'
//
// import axios from "axios";
//          挂载
const app = createApp(App)
// app.use(defineConfig)
app.use(router)
app.mount('#app')
