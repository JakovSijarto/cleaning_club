import { createApp } from 'vue'
import './style.css'
import App from '../src/components/App.vue'
import Router from './router'
import i18n from "./i18n"

createApp(App).use(Router).use(i18n).mount('#app')
