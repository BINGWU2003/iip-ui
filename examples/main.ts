import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import IipUI from '../packages';
import '../packages/theme-chalk/src/index.scss';

const app = createApp(App);

app.use(ElementPlus);
app.use(IipUI);

app.mount('#app'); 