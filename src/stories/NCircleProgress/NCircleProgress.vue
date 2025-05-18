<script lang="ts">
import "./NCircleProgress.css";
import { defineComponent, ref, computed, watch } from "vue";

export default defineComponent({
  name: "NCircleProgress",
  props: {
    /** Completed items (numerator)  */
    current: { type: Number, required: true },
    /** Total items (denominator)    */
    total:   { type: Number, required: true },

    /* — Optional visual tweaks — */
    size:          { type: Number, default: 120 },      // overall px
    strokeWidth:   { type: Number, default: 10 },
    progressColor: { type: String, default: "#3388ff" },
    trackColor:    { type: String, default: "#e4e6ea" },
    fontSize:      { type: String, default: "18px" }
  },

  setup(props) {
    const radius        = 45;                      // SVG r (matches viewBox)
    const circumference = 2 * Math.PI * radius;

    /* Computed percentage (0–1) — auto-updates on prop change */
    const percent = computed(() =>
      props.total > 0 ? props.current / props.total : 0
    );

    /* Mutable dashOffset ref so we can animate with CSS transitions */
    const dashOffset = ref(circumference);

    /** Re-calculate dashOffset whenever current / total change */
    const recalcOffset = () => {
      dashOffset.value = circumference * (1 - Math.min(percent.value, 1));
    };
    recalcOffset();                              // initial value
    watch([() => props.current, () => props.total], recalcOffset);

    /* Everything returned here is usable in the template */
    return {
      radius,
      circumference,
      dashOffset
    };
  }
});
</script>

<template>
  <svg
    class="n-circle-progress"
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
  >
    <!-- Track -->
    <circle
      class="n-circle-progress__track"
      :stroke="trackColor"
      :stroke-width="strokeWidth"
      :r="radius"
      cx="50"
      cy="50"
    />

    <!-- Progress arc (starts at 12 o’clock) -->
    <circle
      class="n-circle-progress__progress"
      :stroke="progressColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      :r="radius"
      cx="50"
      cy="50"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="dashOffset"
      transform="rotate(-90 50 50)"
    />

    <!-- Center text -->
    <text
      class="n-circle-progress__text"
      :x="50"
      :y="50"
      :font-size="fontSize"
      :fill="progressColor"
    >
      {{ current }}/{{ total }}
    </text>
  </svg>
</template>
