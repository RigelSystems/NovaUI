<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import './n-button.css';
import { NovaUIConfigSymbol } from '../../../index';

export default defineComponent({
  name: 'NButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as () => 'small' | 'medium' | 'large',
      default: 'medium',
    },
    backgroundColor: {
      type: String,
      default: '',
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

    const classes = computed(() => ({
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size}`]: true,
    }));

    const styles = computed(() => ({
      backgroundColor: novaConfig.theme,
      borderRadius: novaConfig.borderRadius,
    }));

    const onClick = () => {
      emit('click');
    };

    return {
      novaConfig,
      classes,
      styles,
      onClick,
    };
  },
});
</script>

<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    :style="styles"
  >
    {{ label }}
  </button>
</template>
