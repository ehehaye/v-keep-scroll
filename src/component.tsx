import { defineComponent, h } from "vue-demi";

export default defineComponent({
  name: "keep-scroll",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  render() {
    const { tag, $attrs, $slots } = this;
    const Comp = h(tag);
    return (
      // @ts-ignore
      <Comp v-keep-scroll {...$attrs}>
        {/* @ts-ignore */}
        {...$slots.default()}
      </Comp>
    );
  },
});
