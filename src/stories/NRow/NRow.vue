<script lang="ts">
import { defineComponent, onMounted, watch, PropType, inject } from 'vue';
import { NovaUIConfigSymbol } from '../../../index';

interface ColBreakpoints {
  [breakpoint: string]: number[];
  // Example: { sm: [100], md: [60, 40], lg: [33.33, 33.33, 33.33] }
}

export default defineComponent({
  name: 'NRow',
  props: {
    cols: {
      type: Object as PropType<ColBreakpoints>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

    // Define breakpoints
    const breakpointsMap: Record<string, number> = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    };

    const styleId = 'n-row-dynamic-styles';

    const injectDynamicStyles = () => {
      let css = `
        .n-row {
          display: flex;
          flex-wrap: wrap;
        }
        .n-col {
          box-sizing: border-box;
        }
      `;

      // Get the smallest defined breakpoint (for default styles)
      const smallestBreakpoint = Object.keys(props.cols)[0] as keyof ColBreakpoints;
      if (smallestBreakpoint) {
        const widths = props.cols[smallestBreakpoint];
        widths.forEach((widthValue, idx) => {
          css += `
            .n-col:nth-child(${widths.length}n + ${idx + 1}) {
              width: ${widthValue}%;
            }
          `;
        });
      }

      // Generate styles for larger breakpoints
      for (const [bp, widths] of Object.entries(props.cols)) {
        if (!breakpointsMap[bp]) continue;
        css += `@media (min-width: ${breakpointsMap[bp]}px) {\n`;
        widths.forEach((widthValue, idx) => {
          css += `
            .n-col:nth-child(${widths.length}n + ${idx + 1}) {
              width: ${widthValue}%;
            }
          `;
        });
        css += `}\n`;
      }

      // Inject or update dynamic style element
      let styleEl = document.getElementById(styleId);
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }
      styleEl.innerHTML = css;
    };

    onMounted(injectDynamicStyles);
    watch(() => props.cols, injectDynamicStyles, { deep: true });

    return {
      novaConfig,
    };
  },
});
</script>

<template>
  <div class="n-row">
    <div class="n-col" v-for="(child, i) in $slots.default?.() || []" :key="i">
      <component :is="child" />
    </div>
  </div>
</template>

<style scoped>
/* No static styles needed; all styles are injected dynamically */
</style>
