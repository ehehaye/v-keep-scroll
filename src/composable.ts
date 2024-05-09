import { useElementVisibility, useScroll } from "@vueuse/core";
import { ref, watch, computed } from "vue-demi";

/**
 * Inspired by https://github.com/vuejs/core/issues/2349#issuecomment-1954523642
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useVisibilityLifecycle = (el: any) => {
  const visible = useElementVisibility(el);

  const state = ref<"mounted" | "activated" | "deactivated">("mounted");

  watch(visible, () => {
    state.value = visible.value ? "activated" : "deactivated";
  });

  const isActivated = computed(() => state.value === "activated");
  const isDeactivated = computed(() => state.value === "deactivated");

  return { state, isActivated, isDeactivated };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useKeepScroll = (el: any) => {
  const { x, y } = useScroll(el, { throttle: 100 });
  const { isActivated } = useVisibilityLifecycle(el);

  watch(isActivated, () => {
    if (isActivated.value) {
      el.scrollTop = y.value;
      el.scrollLeft = x.value;
    }
  });
};
