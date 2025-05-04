<template>
  <button
    class="n-tab"
    :class="{ active: active }"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NTab',
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.n-tab {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  color: #555;
}
.n-tab.active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
  background-color: #fff;
}
</style>
