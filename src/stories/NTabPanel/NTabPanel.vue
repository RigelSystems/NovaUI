<template>
  <div v-if="active">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NTabPanel',
  props: {
    index: {
      type: Number,
      required: true,
    },
    activeTab: {
      type: Number,
      required: true,
    },
  },
  computed: {
    active(): boolean {
      return this.index === this.activeTab;
    },
  },
});
</script>
