<script setup lang="ts">
import './n-button.css';
import { NovaUIConfigSymbol } from '../../../index.ts';
import { computed, inject } from 'vue';

// Define Props Interface
interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

// Inject NovaUI Configuration
const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

// Define Props and Emits
const props = defineProps<ButtonProps>();
const emit = defineEmits<{
  (event: 'click'): void;
}>();

// Computed Styles and Classes
const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click');
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="{ backgroundColor: novaConfig.theme, borderRadius: novaConfig.borderRadius }">
    {{ label }}
  </button>
</template>
