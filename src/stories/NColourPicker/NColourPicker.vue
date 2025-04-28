<template>
  <div class="n-color-picker">
    <!-- Preset colors -->
    <button
      v-for="(color, index) in colors"
      :key="`preset-${index}`"
      :aria-label="`Select color ${color}`"
      class="n-color-picker__swatch"
      :class="{ 'n-color-picker__swatch--selected': selectedColor === color }"
      :style="{ backgroundColor: color }"
      @click="selectColor(color)"
    >
      <span
        v-if="selectedColor === color"
        size="20"
        class="mdi mdi-check n-color-picker__icon"
      ></span>
    </button>

    <!-- Custom color picker -->
    <button
      v-if="allowCustom"
      class="n-color-picker__swatch"
      :class="{ 'n-color-picker__swatch--selected': isCustomSelected }"
      :style="{ backgroundColor: customColor || '#e5e7eb' }"
      @click="openCustomPicker"
      aria-label="Pick a custom color"
    >
      <span
        v-if="!customColor"
        size="20"
        class="mdi mdi-plus n-color-picker__icon"
      ></span>
      <span
        v-else-if="isCustomSelected"
        size="20"
        class="mdi mdi-check n-color-picker__icon"
      ></span>
    </button>

    <!-- hidden native color input -->
    <input
      ref="colorInput"
      type="color"
      class="n-color-picker__native-input"
      @change="handleCustomColor"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from 'vue';

export default defineComponent({
  name: 'NColorPicker',
  props: {
    colors: {
      type: Array as PropType<string[]>,
      default: () => ['#f44336', '#ff9800', '#ffcb40', '#4caf50', '#03a9f4', '#3f51b5'],
    },
    allowCustom: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selectedColor = ref(props.modelValue || '');
    const customColor = ref('');
    const colorInput = ref<HTMLInputElement | null>(null);

    const isCustomSelected = computed(() => {
      return props.allowCustom && customColor.value && selectedColor.value === customColor.value;
    });

    const selectColor = (color: string) => {
      selectedColor.value = color;
      emit('update:modelValue', color);
    };

    const openCustomPicker = () => {
      colorInput.value?.click();
    };

    const handleCustomColor = (e: Event) => {
      const input = e.target as HTMLInputElement;
      customColor.value = input.value;
      selectColor(customColor.value);
    };

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) {
          selectedColor.value = newVal;
          if (props.allowCustom && !props.colors.includes(newVal)) {
            customColor.value = newVal;
          }
        }
      }
    );

    return {
      colors: props.colors,
      allowCustom: props.allowCustom,
      selectedColor,
      customColor,
      colorInput,
      isCustomSelected,
      selectColor,
      openCustomPicker,
      handleCustomColor,
    };
  },
});
</script>

<style scoped>
.mdi {
  font-size:1.5rem;
}

.n-color-picker {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.n-color-picker__swatch {
  --size: 36px;
  width: var(--size);
  height: var(--size);
  border: none;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.n-color-picker__swatch:hover {
  transform: scale(1.05);
}

.n-color-picker__swatch--selected {
  box-shadow: 0 0 0 3px rgba(3, 169, 244, 0.25);
}

.n-color-picker__icon {
  position: absolute;
  inset: 0;
  margin: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.n-color-picker__native-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
</style>
