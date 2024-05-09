<template>
  <component :is="tag" v-keep-scroll v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "keep-scroll",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
});
</script>

<style></style>
