<template>
  <keep-scroll id="comp-c">
    <div class="child">slot xxx</div>
  </keep-scroll>
</template>

<script>
import { defineComponent } from "vue";
import { KeepScroll } from "v-keep-scroll";

// manually import
export default defineComponent({
  components: {
    KeepScroll,
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
