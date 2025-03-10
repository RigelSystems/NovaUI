<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import "./NHeroSection.css";
  import { NovaUIConfigSymbol } from '../../../index';
  import NButton from '../NButton/NButton.vue';

  export default defineComponent({
    name: "NHeroSection",
    components: {
      NButton,
    },
    props: {
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      content: {
        type: String,
      },
      actionButtons: {
        type: Array,
        default: () => [],
      },
    },
    setup(props) {
      const novaConfig = inject(NovaUIConfigSymbol, { theme: '#000000', borderRadius: '4px' });

      return {
        novaConfig,
      };
    },
  });
</script>

<template>
  <div class="n-hero-section">
    <div class="n-hero-section__textarea">
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
      <p>{{ content }}</p>
      <div v-if="actionButtons.length > 0" class="n-hero-section__actions">
        <n-button
          v-for="(button, index) in actionButtons"
          :key="index"
          :label="button.label"
        />
      </div>
    </div>
    <div class="n-hero-section__image">
      <slot name="image"></slot>
    </div>
  </div>
</template>
