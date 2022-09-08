import { createApp } from "vue";
import {createPinia} from 'pinia';
import App from "@/App";
import router from "@/router/index.js";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
