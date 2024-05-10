import { createApp } from "vue-demi";
import plugin from "v-keep-scroll";
import App from "./App.vue";

const app = createApp(App);
app.use(plugin);
app.mount("#app");
