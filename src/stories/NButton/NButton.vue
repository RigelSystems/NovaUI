<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import './NButton.css';

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
    colour: {
      type: String,
      default: '',
    },
    size: {
      type: String as () => 'tiny' | 'small' | 'medium' | 'large',
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
      'n-button': true,
      'n-button--primary': props.primary,
      'n-button--secondary': !props.primary,
      [`n-button--${props.size}`]: true,
      [`n-${props.colour}`]: props.colour,
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
    v-if="!href"
    type="button"
    :class="classes"
    @click="onClick"
    :style="styles"
  >
    {{ label }}
    <slot></slot>
  </button>
  <a
    v-else
    :href="href"
    :class="classes"
    @click="onClick"
    :style="styles"
  >
    {{ label }}
    <slot></slot>
  </a>
</template>
