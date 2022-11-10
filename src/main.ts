import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {mockXHR} from "@/mock/index"
createApp(App).use(store).use(router).mount("#app");
if(process.env.NODE_ENV=="mock"){
	mockXHR();
}