import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import api from './api.js'

createApp(App).use(store).use(router).mixin(api).mount('#app')

window.Kakao.init('6e62871aef85e4eba9d0bf670449c62d')
window.Kakao.isInitialized()
