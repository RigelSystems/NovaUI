<script lang="ts">
import { defineComponent } from 'vue'
import './NTextInput.css'

export default defineComponent({
  name: 'NTextInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit('update:value', target.value)
    }

    return { onInput }
  },
})
</script>

<template>
  <div class="n-text-input n-input-wrapper">
    <label class="n-input__label">{{ label }}</label>
    <input
      class="n-input__input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>
