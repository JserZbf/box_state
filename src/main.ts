import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import ElementPlus from "element-plus";
import store from './store/index.js'
import "~/styles/index.scss";
import 'uno.css'
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/message.scss"
import * as Elicons from "@element-plus/icons-vue";

const app = createApp(App);
for (const name in Elicons) {
    app.component(name, Elicons[name]);
}
app.use(store)
app.use(ElementPlus);
app.use(router);
app.mount('#app');