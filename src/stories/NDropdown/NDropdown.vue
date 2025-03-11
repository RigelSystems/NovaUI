<template>
  <div class="n-dropdown">
    <div @click="toggleDropdown">
      <p v-if="$props.label">{{ $props.label }}</p>
      <slot v-else name="label"></slot>
    </div>

    <div v-if="isOpen" class="n-dropdown-content">
      <p v-if="$props.content">{{ $props.content }}</p>
      <slot v-else name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "NDropdown",
  props: {
    label: {
      type: String,
    },
    content: {
      type: String,
    },
  },
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
