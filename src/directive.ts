import { Directive } from "vue";
import { useKeepScroll } from "@/composable";

export const directive: Directive = {
  mounted(element, binding) {
    const value: string[] | string = binding.value?.length ? binding.value : [];
    const selectors: string[] = Array.isArray(value) ? value : [value];

    const elements = !selectors.length
      ? [element]
      : selectors
          .map(s => {
            const e = element.querySelector(s);
            if (!e) {
              console.error(`[v-keep-scroll] Element not found: ${s}`);
            }
            return e;
          })
          .filter(e => !!e);

    elements.forEach((e: HTMLElement) => {
      const { overflowX, overflowY } = getComputedStyle(e);

      if (
        !["auto", "scroll"].includes(overflowX) ||
        !["auto", "scroll"].includes(overflowY)
      ) {
        console.warn(
          `[v-keep-scroll] Element's overflow should be 'auto' or 'scroll': `,
          e,
          { overflowX, overflowY }
        );
      }

      useKeepScroll(e);
    });
  },
};

export const name = "keep-scroll";

export default { name, directive };
