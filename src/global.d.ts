import { KeepScroll } from "./index";
import { vKeepScroll } from "./index";

declare module "vue" {
  export interface GlobalComponents {
    KeepScroll: typeof KeepScroll;
  }
  export interface ComponentCustomProperties {
    vKeepScroll: typeof vKeepScroll;
  }
}

export {};
