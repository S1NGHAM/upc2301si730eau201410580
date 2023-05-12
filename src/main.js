import { createApp } from 'vue'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "./router/index.js";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
createApp(App)
    .use(PrimeVue,{ripple: true})
    .use(router)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .mount('#app')