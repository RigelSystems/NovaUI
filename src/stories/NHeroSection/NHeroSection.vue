<script lang="ts">
  import { defineComponent, computed, inject, defineAsyncComponent } from 'vue';
  import "./NHeroSection.css";
  

  const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

  interface ActionButton {
    label: string;
    href: string;
    onClick: () => void;
  }

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
        type: Array as () => ActionButton[],
        default: () => [],
      },
      layout: {
        validator: (value: string) => {
          return ['left', 'right', 'center'].includes(value);
        },
        type: String,
        default: 'center',
      },
    },
    setup(props) {
      return {};
    },
  });
</script>

<template>
  <div :class="`n-hero-section n-hero-section-${layout}`">
    <div class="n-hero-section__textarea">
      <h1 class="n-hero-section__title">{{ title }}</h1>
      <h2 class="n-hero-section__subtitle">{{ subtitle }}</h2>
      <p class="n-hero-section__content">{{ content }}</p>
      <div v-if="actionButtons.length > 0" class="n-hero-section__actions">
        <n-button
          v-for="(button, index) in actionButtons"
          :key="index"
          :label="button.label"
          @click="button.onClick"
        />
      </div>
    </div>
    <div class="n-hero-section__image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
  </div>
</template>
