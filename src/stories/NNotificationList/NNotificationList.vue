<script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';
  
  import "./NNotificationList.css";

  const NNotification = defineAsyncComponent(() => import('../NNotification/NNotification.vue'));

  interface ActionButton {
    label: string;
    href: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  interface Notification {
    message: string;
    time: string;
    actionButtons: ActionButton[];
  }

  export default defineComponent({
    name: "NNotificationList",
    components: {
      NNotification,
    },
    props: {
      notifications: {
        type: Array as () => Notification[],
        required: true,
      },
    },
    setup(props) {
      return {};
    },
  });
</script>

<template>
  <div class="n-notification-list">
    <n-notification
      v-for="(notification, index) in notifications"
      :key="index"
      :message="notification.message"
      :time="notification.time"
      :actionButtons="notification.actionButtons"
    />
  </div>
</template>
