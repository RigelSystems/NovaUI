<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from 'vue'
import './NColourPicker.css'

export default defineComponent({
  name: 'NColourPicker',
  props: {
    colors: {
      type: Array as PropType<string[]>,
      default: () => ['#f44336', '#ff9800', '#ffcb40', '#4caf50', '#03a9f4', '#3f51b5'],
    },
    allowCustom: { type: Boolean, default: true },
    modelValue:  { type: String,  default: '' },
    label:       { type: String,  default: 'Select Color' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /* ------------------------------------------------------------------ */
    /** internal state */
    const selectedColor = ref(props.modelValue || '')
    const customColor   = ref('')

    /* initialise customColor if the first value is not in presets */
    if (props.allowCustom && props.modelValue && !props.colors.includes(props.modelValue)) {
      customColor.value = props.modelValue
    }

    /* ------------------------------------------------------------------ */
    /** helpers */
    const isCustomSelected = computed(() =>
      props.allowCustom && selectedColor.value && !props.colors.includes(selectedColor.value)
    )

    const selectColor = (color: string) => {
      selectedColor.value = color
      emit('update:modelValue', color)
    }

    const openCustomPicker = () => colorInput.value?.click()

    const handleCustomColor = (e: Event) => {
      const input = e.target as HTMLInputElement
      customColor.value = input.value
      selectColor(customColor.value)
    }

    /* ------------------------------------------------------------------ */
    /** keep internal state in sync with outer v-model */
    watch(
      () => props.modelValue,
      (newVal) => {
        if (!newVal) return
        selectedColor.value = newVal

        if (props.allowCustom && !props.colors.includes(newVal)) {
          customColor.value = newVal          // <- update custom swatch
        }
      }
    )

    const colorInput = ref<HTMLInputElement | null>(null)

    return {
      /* template refs & data */
      selectedColor,
      customColor,
      colorInput,
      isCustomSelected,
      colors: props.colors,
      allowCustom: props.allowCustom,

      /* methods */
      selectColor,
      openCustomPicker,
      handleCustomColor,
    }
  },
})
</script>

<template>
  <div class="n-colour-picker n-input-wrapper">
    <label v-if="label" class="n-input__label">{{ label }}</label>

    <div class="n-color-picker">
      <!-- preset colours -->
      <button
        v-for="(color, i) in colors"
        :key="`preset-${i}`"
        type="button"
        class="n-color-picker__swatch"
        :class="{ 'n-color-picker__swatch--selected': selectedColor === color }"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
        :aria-label="`Select colour ${color}`"
      >
        <span
          v-if="selectedColor === color"
          class="mdi mdi-check n-color-picker__icon"
        ></span>
      </button>

      <!-- custom picker swatch -->
      <button
        v-if="allowCustom"
        class="n-color-picker__swatch"
        :class="{ 'n-color-picker__swatch--selected': isCustomSelected }"
        :style="{ backgroundColor: isCustomSelected ? selectedColor : '#e5e7eb' }"
        @click="openCustomPicker"
        type="button"
        aria-label="Pick a custom colour"
      >
        <span
          v-if="!isCustomSelected"
          class="mdi mdi-plus n-color-picker__icon"
        ></span>
        <span
          v-else
          class="mdi mdi-check n-color-picker__icon"
        ></span>
      </button>

      <!-- hidden native input -->
      <input
        ref="colorInput"
        type="color"
        class="n-color-picker__native-input"
        @change="handleCustomColor"
      />
    </div>
  </div>
</template>
