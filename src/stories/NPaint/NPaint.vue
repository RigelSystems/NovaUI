<script lang="ts">
import "./NPaint.css";
import { defineComponent, ref, watch, defineAsyncComponent } from "vue";

const NButton = defineAsyncComponent(() => import("../NButton/NButton.vue"));

export default defineComponent({
  name: "NPaint",
  components: {
    NButton,
  },
  // Enable n-model / v-model:pixelData by pairing prop + update event
  model: { prop: "pixelData", event: "update:pixelData" },
  props: {
    gridX: {
      type: Number,
      default: 8,
    },
    gridY: {
      type: Number,
      default: 8,
    },
    /** Existing or blank matrix of colours. */
    pixelData: {
      type: Array as () => string[][],
      default: () => [],
    },
  },
  emits: ["update:pixelData", "save"],
  setup(props, { emit }) {
    /* ------------------------------------------------ reactive state */
    const selectedColor = ref<string>("#000000");

    const createPixelData = (x: number, y: number) =>
      Array.from({ length: y }, () => Array(x).fill("#ffffff"));

    const clonePixelData = (data: string[][]) => data.map((row) => [...row]);

    // Initialise canvas from prop or blank
    const pixelDataLocal = ref<string[][]>(
      props.pixelData.length
        ? clonePixelData(props.pixelData)
        : createPixelData(props.gridX, props.gridY)
    );

    /* ---------------------------------------------------- watchers */
    // Sync canvas size changes while preserving colours
    watch(
      [() => props.gridX, () => props.gridY],
      ([newGridX, newGridY]) => {
        const fresh = createPixelData(newGridX, newGridY);
        for (let y = 0; y < Math.min(pixelDataLocal.value.length, newGridY); y++) {
          for (let x = 0; x < Math.min(pixelDataLocal.value[0].length, newGridX); x++) {
            fresh[y][x] = pixelDataLocal.value[y][x];
          }
        }
        pixelDataLocal.value = fresh;
        emit("update:pixelData", clonePixelData(pixelDataLocal.value));
      }
    );

    // External prop replacement -> local clone
    watch(
      () => props.pixelData,
      (newVal) => {
        if (newVal && newVal.length) {
          pixelDataLocal.value = clonePixelData(newVal);
        }
      },
      { deep: true }
    );

    /* ----------------------------------------------------- methods */
    const changeColor = (rowIndex: number, colIndex: number) => {
      pixelDataLocal.value[rowIndex][colIndex] = selectedColor.value;
      emit("update:pixelData", clonePixelData(pixelDataLocal.value));
    };

    const save = () => {
      emit("save", clonePixelData(pixelDataLocal.value));
    };

    /* ---------------------------------------------- expose to tpl */
    return {
      selectedColor,
      pixelDataLocal,
      changeColor,
      save,
    };
  },
});
</script>

<template>
  <div class="palette">
    <input type="color" v-model="selectedColor" class="color-picker" />
  </div>

  <div
    class="pixel-canvas"
    :style="{
      '--cell-width': `${100 / $props.gridX}%`,
      '--cell-height': `${100 / $props.gridY}%`,
    }"
  >
    <div
      v-for="(row, rowIndex) in pixelDataLocal"
      :key="rowIndex"
      class="pixel-row"
    >
      <div
        v-for="(color, colIndex) in row"
        :key="colIndex"
        class="pixel-cell"
        :style="{ backgroundColor: color }"
        @click="changeColor(rowIndex, colIndex)"
      />
    </div>
  </div>

  <input
    type="hidden"
    name="pixelData"
    :value="JSON.stringify(pixelDataLocal)"
  />
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
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.pixel-row {
  display: flex;
  height: var(--cell-height);
}

.pixel-cell {
  width: var(--cell-width);
  height: 100%;
  border: 1px solid #ccc;
  cursor: pointer;
  box-sizing: border-box;
}

.pixel-cell:not(:last-child) {
  border-right: none;
}

.pixel-row:not(:last-child) .pixel-cell {
  border-bottom: none;
}
</style>
