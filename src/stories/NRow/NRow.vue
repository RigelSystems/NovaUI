<script lang="ts">
import { defineComponent, onMounted, watch, PropType, inject, ref } from 'vue';
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
  setup(props) {
    const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

    // Generate a unique class for each NRow instance
    const uniqueClass = ref(`n-row-${Math.random().toString(36).substr(2, 9)}`);

    const breakpointsMap: Record<string, number> = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    };

    const injectDynamicStyles = () => {
      let css = `
        .${uniqueClass.value} {
          display: flex;
          flex-wrap: wrap;
        }
        .${uniqueClass.value} .n-col {
          box-sizing: border-box;
        }
      `;

      // Get the smallest defined breakpoint (for default styles)
      const smallestBreakpoint = Object.keys(props.cols)[0] as keyof ColBreakpoints;
      if (smallestBreakpoint) {
        const widths = props.cols[smallestBreakpoint];
        widths.forEach((widthValue, idx) => {
          css += `
            .${uniqueClass.value} .n-col:nth-child(${widths.length}n + ${idx + 1}) {
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
            .${uniqueClass.value} .n-col:nth-child(${widths.length}n + ${idx + 1}) {
              width: ${widthValue}%;
            }
          `;
        });
        css += `}\n`;
      }

      // Inject styles unique to this component
      const styleId = `style-${uniqueClass.value}`;
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
      uniqueClass,
    };
  },
});
</script>

<template>
  <div :class="uniqueClass">
    <div class="n-col" v-for="(child, i) in $slots.default?.() || []" :key="i">
      <component :is="child" />
    </div>
  </div>
</template>

<style scoped>
/* No static styles needed; all styles are dynamically injected */
</style>
