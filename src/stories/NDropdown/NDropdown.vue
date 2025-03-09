<template>
  <div class="n-dropdown">
    <div @click="toggleDropdown">
      <slot name="label"></slot>
    </div>

    <div v-if="isOpen" class="n-dropdown-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "NDropdown",
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleDropdown,
    };
  },
});
</script>
