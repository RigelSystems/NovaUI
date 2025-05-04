<script lang="ts">
import { defineComponent } from 'vue';
import './NPill.css';

export default defineComponent({
  name: 'NPill',
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default', // can be 'default', 'primary', 'warning', 'danger'
    },
  },
});
</script>

<template>
  <span class="n-pill" :class="`n-${color}`">
    {{ label }}
  </span>
</template>
