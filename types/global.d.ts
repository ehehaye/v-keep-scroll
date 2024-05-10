import { KeepScroll } from "v-keep-scroll";
import { vKeepScroll } from "v-keep-scroll";

declare module "vue" {
  export interface GlobalComponents {
    KeepScroll: typeof KeepScroll;
  }
  export interface ComponentCustomProperties {
    vKeepScroll: typeof vKeepScroll;
  }
}

export {};
