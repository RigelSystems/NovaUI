<script lang="ts">
import "./NDropdown.css";
import { defineComponent, ref, computed } from 'vue';

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

<template>
  <div class="n-dropdown">
    <div @click="toggleDropdown" class="n-dropdown__header">
      <p class="n-dropdown__header-text" v-if="$props.label">{{ $props.label }}</p>
      <slot v-else name="label"></slot>
    </div>

    <div 
      ref="dropdownContent"
      :class="['n-dropdown__content', { 'n-dropdown__content--open': isOpen }]"
    >
      <p v-if="$props.content">{{ $props.content }}</p>
      <slot v-else name="content"></slot>
    </div>
  </div>
</template>
