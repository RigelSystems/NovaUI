<script lang="ts">
  import { defineComponent, defineAsyncComponent, onMounted, ref } from 'vue';
  import type { PropType } from 'vue';

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

  type Method = 'get' | 'post' | 'put' | 'delete';

  export default defineComponent({
    name: "NNotificationList",
    components: {
      NNotification,
    },
    props: {
      url: {
        type: String,
        required: true,
      },
      method: {
        type: String as PropType<Method>,
        default: 'get',
      },
      params: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({}),
      },
      accessToken: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const notifications = ref<Notification[]>([]);
      const isLoading = ref<boolean>(false);
      const error = ref<string | null>(null);

      const fetchNotifications = async () => {
        isLoading.value = true;
        error.value = null;

        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };

        if (props.accessToken) {
          headers['Authorization'] = `Bearer ${props.accessToken}`;
        }

        const fetchOptions: RequestInit = {
          method: props.method.toUpperCase(),
          headers,
        };

        if (props.method !== 'get') {
          fetchOptions.body = JSON.stringify(props.params);
        }

        const urlWithParams =
          props.method === 'get'
            ? `${props.url}?${new URLSearchParams(props.params).toString()}`
            : props.url;

        try {
          const response = await fetch(urlWithParams, fetchOptions);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          notifications.value = data || [];
        } catch (err: any) {
          error.value = err.message || 'An error occurred';
        } finally {
          isLoading.value = false;
        }
      };

      onMounted(fetchNotifications);

      return {
        notifications,
        isLoading,
        error,
      };
    },
  });
</script>

<template>
  <div class="n-notification-list">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <n-notification
      v-for="(notification, index) in notifications"
      :key="index"
      :message="notification.message"
      :time="notification.time"
      :actionButtons="notification.actionButtons"
    />
  </div>
</template>
