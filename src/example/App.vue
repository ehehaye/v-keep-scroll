<template>
  <div id="container">
    <div id="header">
      <p>Current comp is: {{ is }} .</p>
      <p>Scroll it and toggle to observe its scroll state.</p>
      <p>
        <button @click="next">Click to next</button>
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
import { defineComponent } from "vue";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";
import CompC from "./CompC.vue";

const components = { CompA, CompB, CompC };

const keys = Object.keys(components);

export default defineComponent({
  name: "App",
  components: {
    ...components,
  },
  data() {
    return {
      is: keys[0],
    };
  },
  methods: {
    next() {
      const index = keys.indexOf(this.is);
      this.is = keys[(index + 1) % keys.length];
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
