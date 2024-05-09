import { isVue3, Plugin, Vue2 } from "vue-demi";
import { name, directive } from "./directive";
import Component from "./component.vue";

const v2: Plugin = function () {
  Vue2.directive(name, directive);
  Vue2.component(name, Component);
  return Vue2;
};

const v3: Plugin = function (app) {
  app.directive(name, directive);
  app.component(name, Component);
  return app;
};

export default isVue3 ? v3 : v2;
export { name, directive, Component, v2, v3 };
