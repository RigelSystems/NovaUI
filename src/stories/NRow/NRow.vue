<script lang="ts">
import { defineComponent, onMounted, watch, PropType, inject, ref, computed } from 'vue';
import { NovaUIConfigSymbol } from '../../../index';

interface ColBreakpoints {
  [breakpoint: string]: number[];
}

export default defineComponent({
  name: 'NRow',
  props: {
    cols: {
      type: Object as PropType<ColBreakpoints>,
      required: true,
    },
    gap: {
      type: String,
      default: '1rem',
    }
  },
  setup(props) {
    const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

    const uniqueClass = ref(`n-row-${Math.random().toString(36).substr(2, 9)}`);
    const breakpointsMap: Record<string, number> = {
      sm: 0,
      md: 768,
      lg: 1024,
      xl: 1280,
    };

    const convertGapToPixels = (gap: string): number => {
      if (gap.endsWith('px')) return parseFloat(gap);
      if (gap.endsWith('rem')) return parseFloat(gap) * 16;
      if (gap.endsWith('em')) return parseFloat(gap) * 16;
      return 16; // Default to 1rem if unknown unit
    };

    const injectDynamicStyles = () => {
      const gapSize = convertGapToPixels(props.gap);
      let css = `
        .${uniqueClass.value} {
          display: flex;
          flex-wrap: wrap;
          gap: ${props.gap};
        }
        .${uniqueClass.value} .n-col {
          box-sizing: border-box;
        }
      `;

      const addStylesForBreakpoint = (breakpoint: string, widths: number[]) => {
        const numCols = widths.length;
        const adjustedWidths = widths.map(width => `calc(${width}% - ${(gapSize * (numCols - 1)) / numCols}px)`);

        let mediaQuery = breakpointsMap[breakpoint] ? `@media (min-width: ${breakpointsMap[breakpoint]}px) {` : '';
        adjustedWidths.forEach((width, idx) => {
          mediaQuery += `
            .${uniqueClass.value} .n-col:nth-child(${numCols}n + ${idx + 1}) {
              width: ${width};
            }
          `;
        });
        mediaQuery += breakpointsMap[breakpoint] ? `}` : '';
        css += mediaQuery;
      };

      const breakpoints = Object.keys(props.cols) as (keyof ColBreakpoints)[];
      if (breakpoints.length) {
        breakpoints.forEach(bp => {
          addStylesForBreakpoint(bp, props.cols[bp]);
        });
      }

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
