<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import './n-button.css';

export default defineComponent({
  name: 'NButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as () => 'small' | 'medium' | 'large',
      default: 'medium',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size}`]: true,
    }));

    const styles = computed(() => {
      const baseStyles = {
        backgroundColor: null,
        border: null,
        color: null,
      };

      return baseStyles;
    });


    const onClick = () => {
      emit('click');
    };

    return {
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
    :href="href"
  >
    {{ label }}
  </button>
</template>
