<script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';
  import "./NNotification.css";
  import '@/assets/shared.css';

  const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

  interface ActionButton {
    label: string;
    href: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export default defineComponent({
    name: "NNotification",
    components: {
      NButton,
    },
    props: {
      message: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      actionButtons: {
        type: Array as () => ActionButton[],
        default: () => [],        
      }
    },
    setup(props) {
      return {};
    },
  });
</script>

<template>
  <div class="n-notification">
    <p class="n-notification__message" v-html="message"></p>
    <p class="n-notification__time">{{ time }}</p>

    <div v-if="actionButtons.length > 0" class="n-notification__actions">
      <n-button
        v-for="(button, index) in actionButtons"
        :key="index"
        :label="button.label"
        :primary="button.primary"
        :href="button.href"
        :size="button.size"
      />
    </div>
  </div>
</template>
