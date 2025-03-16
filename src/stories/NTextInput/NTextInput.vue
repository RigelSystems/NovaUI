<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import "./NTextInput.css";

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
      return {};
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
