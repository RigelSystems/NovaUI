<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import "./NTextInput.css";
  import { NovaUIConfigSymbol } from '../../../index';
import { Placeholder } from 'storybook/internal/components';

  export default defineComponent({
    name: "NTextInput",
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
    setup(props) {
      const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

      return {
        novaConfig,
      };
    },
  });
</script>

<template>
  <div class="n-text-input">
    <label class="n-text-input__label">{{ label }}</label>
    <input
      class="n-text-input__input"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>
