<script>
import './n-button.css';
import { reactive, computed, inject } from 'vue';

export default {
  name: 'n-button',

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
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    const novaConfig = inject('NovaUIConfig', { theme: 'blue' });
    
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
      novaConfig,
    };
  },
};
</script>

<template>
  {{ novaConfig }}
  <button type="button" :class="classes" @click="onClick" :style="{ color: novaConfig.theme }">{{ label }}</button>
</template>
