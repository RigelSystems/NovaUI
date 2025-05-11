<template>
  <div class="n-dashboard-tile n-container-style">
    <div class="n-dashboard-tile__icon" :style="style">
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
    colour: {
      type: String,
      default: '#3b82f6',
    },
  },
  setup(props) {
    const shadeDarker = (hex) => {
  const value = parseInt(hex.slice(1), 16);
      let r = (value >> 16) & 0xff;
      let g = (value >> 8)  & 0xff;
      let b =  value        & 0xff;

      const factor = 0.60;           // 15 % darker
      r = Math.max(0, Math.floor(r * (1 - factor)));
      g = Math.max(0, Math.floor(g * (1 - factor)));
      b = Math.max(0, Math.floor(b * (1 - factor)));

      const darker = (r << 16) | (g << 8) | b;
      return `#${darker.toString(16).padStart(6, '0')}`;
    };

    const style = {
      backgroundColor: props.colour,
      color: shadeDarker(props.colour),
    };

    return {
      style,
    };
  },
});
</script>

<style scoped>
.n-dashboard-tile {
  display: flex;
  align-items: center;
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