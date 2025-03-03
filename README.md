# v-keep-scroll

[中文文档](https://github.com/ehehaye/v-keep-scroll/blob/main/README.zh-CN.md)

[Online Demo](https://codepen.io/ehehaye/pen/oNRNMzR)

The v-keep-scroll library enables the preservation of scroll positions for elements that are managed by the keep-alive component between activation and deactivation.

## Installation

```bash
pnpm add v-keep-scroll
```

### Globally Import (via ESM)

```javascript
import { createApp } from "vue";
import plugin from "v-keep-scroll";
import App from "./App.vue";

const app = createApp(App);
app.use(plugin);
app.mount("#app");
```

(Optional) If you are using TypeScript, add the type declaration to jsconfig.json or tsconfig.json for type hinting.

```json
{
  "compilerOptions": {
    "types": [
      "v-keep-scroll/types"
    ]
  }
}
```

### Globally Import (via CDN)

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
<script src="https://unpkg.com/v-keep-scroll"></script>
<script>
  const app = Vue.createApp(App);
  app.use(vKeepScroll.default);
  app.mount("#app");
</script>
```

### Manually Import

```javascript
import { KeepScroll, vKeepScroll } from "v-keep-scroll";

export default {
  components: { KeepScroll },
  directives: { keepScroll: vKeepScroll },
}
```

## Usage

When using the v-keep-scroll directive or the KeepScroll component, make sure to apply them to specific single element rather than virtual elements such as templates or teleport and etc. The elements must have a specific height and be scrollable.

```css
.scrollable {
  /* The height should be a specific value or a valid percentage */
  height: 100px; 
  overflow: auto;
}
```

```html
<!-- CompA -->
<!-- Apply the directive to the current element -->
<div class="scrollable" v-keep-scroll>
  <div id="child"></div>
</div>

<!-- CompB -->
<!-- Apply the directive to a single child using a string selector -->
<div class="scrollable" v-keep-scroll="#child">
  <div id="child"></div>
</div>

<!-- CompC -->
<!-- Apply the directive to multiple children using an array of string selectors -->
<div v-keep-scroll="['#child', '.content']">
  <div class="scrollable" id="child"></div>
  <div class="scrollable" class="content"></div>
</div>

<!-- CompD -->
<!-- Apply the directive using the KeepScroll component with a custom tag (default tag is "div") -->
<keep-scroll tag="div" class="scrollable">
  <div id="child"></div>
</keep-scroll>
```

```html
<keep-alive>
  <comp-a v-if></comp-a>
  <comp-b v-else-if></comp-b>
  <comp-c v-else-if></comp-c>
  <comp-d v-else></comp-d>
</keep-alive>
```
