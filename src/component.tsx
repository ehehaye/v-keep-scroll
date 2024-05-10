import { defineComponent, resolveComponent } from "vue-demi";
import { directive } from "./directive";

export default defineComponent({
  name: "keep-scroll",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  directives: {
    keepScroll: directive,
  },
  render() {
    const { tag, $attrs, $slots } = this;
    const Comp = resolveComponent(tag); // h(tag)
    return (
      // @ts-ignore
      <Comp v-keep-scroll {...$attrs}>
        {/* @ts-ignore */}
        {...$slots.default()}
      </Comp>
    );
  },
});
