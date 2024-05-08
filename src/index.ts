import keepScroll from "./directives/index";
import { isVue2, Plugin, Vue2 } from "vue-demi";

const { name, directive } = keepScroll;

const plugin2: Plugin = function () {
  Vue2?.directive(name, directive);
  return Vue2;
};

const plugin3: Plugin = function (app) {
  app.directive(name, directive);
  return app;
};

export default isVue2 ? plugin2 : plugin3;
export { name, directive };
