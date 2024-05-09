import { defineComponent, resolveComponent } from "vue-demi";

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
