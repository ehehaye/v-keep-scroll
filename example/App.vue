<template>
  <div id="container">
    <div id="header">
      <p>Current comp is: {{ is }} .</p>
      <p>Scroll it and toggle to observe its scroll state.</p>
      <p>
        <button @click="switchComp">Click to switch</button>
      </p>
    </div>
    <div id="content">
      <keep-alive>
        <component :is="is" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";

export default defineComponent({
  components: {
    CompA,
    CompB,
  },
  data() {
    return {
      is: "comp-a",
    };
  },
  methods: {
    switchComp() {
      this.is = this.is === "comp-a" ? "comp-b" : "comp-a";
    },
  },
});
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

* {
  margin: 0;
  padding: 0;
}

p {
  margin: 16px;
  text-align: center;
}

button {
  outline: none;
  padding: 6px;
  border: 1px dashed transparent;
  border-radius: 4px;
  cursor: pointer;
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}

#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
}

#header {
}

#content {
  width: 400px;
  height: 400px;
  overflow: hidden;
}

.child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120%;
  height: 120%;
}
</style>
