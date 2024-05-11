import { defineComponent, h } from "vue";
import { directive } from "./directive";

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  directives: {
    inner: directive,
  },
  render() {
    const { tag, $attrs, $slots } = this;
    const Comp = h(tag);
    return (
      // @ts-ignore
      <Comp v-inner {...$attrs}>
        {...$slots.default?.() || []}
      </Comp>
    );
  },
});
