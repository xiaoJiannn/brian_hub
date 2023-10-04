import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import pinia from "./stores";
import VueLazyload from "vue-lazyload";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
createApp(App).use(router).use(pinia).use(VueLazyload).mount("#app");
