import { createApp } from "vue";
import plugin from "v-keep-scroll";
import App from "./App.vue";

const app = createApp(App);
app.use(plugin);
app.mount("#app");
