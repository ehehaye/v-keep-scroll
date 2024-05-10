<template>
  <k-s id="comp-c">
    <div class="child">123</div>
  </k-s>
</template>

<script>
import { defineComponent } from "vue-demi";
import { KeepScroll } from "v-keep-scroll";

// manually import
export default defineComponent({
  components: {
    KS: KeepScroll,
  },
});
</script>

<style>
#comp-c {
  background-color: green;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
