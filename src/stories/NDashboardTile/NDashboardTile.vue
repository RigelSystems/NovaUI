<template>
  <div class="n-dashboard-tile">
    <div class="n-dashboard-tile__icon">
      <span :class="['mdi', icon]"></span>
    </div>

    <div class="n-dashboard-tile__content">
      <p class="n-dashboard-tile__title">{{ title }}</p>
      <p class="n-dashboard-tile__value">{{ value }}</p>
      <p class="n-dashboard-tile__bottom-text">{{ bottomText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NDashboardTile',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    bottomText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.n-dashboard-tile {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  gap: 1rem;
}

.n-dashboard-tile__icon {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  font-size: 1.5rem;
  color: #6b7280;
}

.n-dashboard-tile__content {
  flex: 1;
}

.n-dashboard-tile__title {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
}

.n-dashboard-tile__value {
  margin: 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.n-dashboard-tile__bottom-text {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>