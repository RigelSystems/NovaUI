<script lang="ts">
import "./NPaintDisplay.css";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "NPaintDisplay",
  props: {
    /**
     * Two-dimensional array of CSS-valid colour strings.
     * Example: [["#fff", "#000"], ["#000", "#fff"]]
     */
    pixelData: {
      type: Array as () => string[][],
      default: () => [],
    },
    /**
     * Pixel square size in **pixels**.
     */
    size: {
      type: Number,
      default: 12,
    },
  },
  setup(props) {

    return {

    };
  },
});
</script>

<template>
  <div class="pixel-icon">
    <div v-for="(row, rowIndex) in pixelData" :key="rowIndex" class="pixel-row">
      <div v-for="(color, colIndex) in row" :key="colIndex" class="pixel-cell"
        :style="{ backgroundColor: color, width: `${size}px`, height: `${size}px` }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.palette {
  display: flex;
  margin-bottom: 10px;
}

.color-picker {
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;
}

.pixel-canvas {
  display: inline-block;
  margin-bottom: 10px;
}

.pixel-row {
  display: flex;
}

.pixel-cell {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.pixel-icon .pixel-cell {
  width: 3px;
  height: 3px;
  border: none;
}
</style>