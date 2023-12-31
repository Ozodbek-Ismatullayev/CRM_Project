import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./plugins/vee-validate";
import "bootstrap/dist/css/bootstrap.min.css"
import "@hennge/vue3-pagination/dist/vue3-pagination.css"
createApp(App).use(store).use(router).mount('#app')
