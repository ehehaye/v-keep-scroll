import { Plugin } from "vue";
import { name, directive } from "./directive";
import Component from "./component";

const plugin: Plugin = function (app) {
  app.directive(name, directive);
  app.component(name, Component);
  return app;
};

export default plugin;
export { name, directive as vKeepScroll, Component as KeepScroll };
