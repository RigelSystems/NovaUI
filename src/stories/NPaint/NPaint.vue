<script lang="ts">
import { defineComponent, ref, watch, defineAsyncComponent } from 'vue';

const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

export default defineComponent({
  name: 'NPaint',
  components: {
    NButton
  },
  props: {
    gridX: {
      type: Number,
      default: 8
    },
    gridY: {
      type: Number,
      default: 8
    }
  },
  emits: ['save'],
  setup(props, {emit}) {
    const selectedColor = ref<string>('#000000');

    const createPixelData = (x: number, y: number) => 
      Array.from({ length: y }, () => Array(x).fill('#ffffff'));

    const pixelData = ref<string[][]>(createPixelData(props.gridX, props.gridY));

    watch([() => props.gridX, () => props.gridY], ([newGridX, newGridY]) => {
      pixelData.value = createPixelData(newGridX, newGridY);
    });

    const save = () => {
      emit('save', pixelData.value);
    };

    const changeColor = (rowIndex: number, colIndex: number) => {
      pixelData.value[rowIndex][colIndex] = selectedColor.value;
    };

    return {
      selectedColor,
      pixelData,
      changeColor,
      save
    };
  }
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
      '--cell-height': `${100 / $props.gridY}%`
    }"
  >
    <div v-for="(row, rowIndex) in pixelData" :key="rowIndex" class="pixel-row">
      <div
        v-for="(color, colIndex) in row"
        :key="colIndex"
        class="pixel-cell"
        :style="{ backgroundColor: color }"
        @click="changeColor(rowIndex, colIndex)"
      />
    </div>
  </div>

  <NButton label="Save" @click="save" />
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
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.pixel-row {
  display: flex;
  height: var(--cell-height); /* Each row gets dynamic height */
}

.pixel-cell {
  width: var(--cell-width); /* Each cell gets dynamic width */
  height: 100%; /* Make sure it fills the row */
  border: 1px solid #ccc;
  cursor: pointer;
}

.pixel-icon .pixel-cell {
  width: 3px;
  height: 3px;
  border: none;
  box-sizing: border-box; /* Prevents extra size from borders */
}

.pixel-cell:not(:last-child) {
  border-right: none; /* Removes duplicate borders between cells */
}

.pixel-row:not(:last-child) .pixel-cell {
  border-bottom: none; /* Removes duplicate horizontal borders */
}
</style>
