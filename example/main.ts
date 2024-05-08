import { isVue2, createApp, Vue2 } from "vue-demi";
import plugin from "@/index";
import App from "./App.vue";

if (isVue2) {
  Vue2.use(plugin);
  new Vue2({
    el: "#app",
    ...App,
  });
} else {
  const app = createApp(App);
  app.use(plugin).mount("#app");
}
