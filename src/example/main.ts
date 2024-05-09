import { createApp } from "vue-demi";
import plugin from "@/index";
import App from "./App.vue";

const app = createApp(App);
app.use(plugin).mount("#app");
