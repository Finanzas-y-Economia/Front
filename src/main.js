
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

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Message  from 'primevue/message';
import InputNumber from 'primevue/inputnumber';
import InlineMessage from 'primevue/inlinemessage';
import Slider from 'primevue/slider';


import Password from 'primevue/password';
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Pv-Password',Password);
app.component('Pv-InlineMessage',InlineMessage);
app.component('Pv-Dialog',Dialog);
app.component('Pv-Button',Button);
app.component('Pv-Card',Card);
app.component('Pv-InputSwitch',InputSwitch);
app.component('Pv-InputText',InputText);
app.component('Pv-DataTable',DataTable);
app.component('Pv-Column',Column);
app.component('Pv-ColumnGroup',ColumnGroup);
app.component('Pv-InputNumber',InputNumber);
app.component('Pv-Message',Message);
app.component('Pv-Slider',Slider)
app.mount('#app')
