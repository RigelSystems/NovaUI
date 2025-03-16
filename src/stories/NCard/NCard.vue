<script lang="ts">
  import { defineComponent, computed, inject, defineAsyncComponent } from 'vue';
  import "./NCard.css";

  const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

  interface ActionButton {
    label: string;
    href: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export default defineComponent({
    name: "NCard",
    components: {
      NButton,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      actionButtons: {
        type: Array as () => ActionButton[],
        default: () => [],
      },
    },
    setup(props) {
      return {};
    },
  });
</script>

<template>
  <div class="n-card">
    <h2 class="n-card__title">{{ title }}</h2>
    <h6 class="n-card__subtitle">{{ subtitle }}</h6>

    <p v-if="content">{{ content }}</p>
    <slot v-else name="content"></slot>

    <div v-if="actionButtons.length > 0" class="n-card__actions">
      <n-button
        v-for="(button, index) in actionButtons"
        :key="index"
        :label="button.label"
        :primary="button.primary"
        :href="button.href"
        :size="button.size"
      />
    </div>
    <slot v-else name="actions"></slot>
  </div>
</template>
