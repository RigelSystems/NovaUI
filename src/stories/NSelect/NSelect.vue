<script lang="ts">
import { defineComponent } from 'vue'
import './NSelect.css'

export default defineComponent({
  name: 'NSelect',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array as () => Array<{ value: string; label: string }>,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const onInput = (event: Event) => {
      const target = event.target as HTMLSelectElement
      emit('update:value', target.value)
    }

    return { onInput }
  },
})
</script>

<template>
  <div class="n-select n-input-wrapper">
    <label class="n-input__label">{{ label }}</label>
    <select
      class="n-input__input"
      :value="value"
      @input="onInput"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template> 