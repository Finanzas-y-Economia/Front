
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';



import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext'
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Pv-Dialog',Dialog);
app.component('Pv-Button',Button);
app.component('Pv-Card',Card);
app.component('Pv-InputSwitch',InputSwitch);
app.component('Pv-InputText',InputText);
app.mount('#app')
