<template>
  <div class="list-container">
    <div v-if="loading" class="loading-overlay">
      <p>Loading...</p>
    </div>
    <ul role="list" :class="{ disabled: loading }">
      <li
        v-for="(item, index) in sortedItems"
        :key="item.id"
        class="list-item"
        role="listitem"
        draggable="true"
        :aria-disabled="loading"
        @dragstart="loading ? null : onDragStart(index)"
        @dragover.prevent
        @drop="loading ? null : onDrop(index)"
        @touchstart="loading ? null : onDragStart(index)"
        @touchmove.prevent
        @touchend="loading ? null : onDrop(index)"
      >
        <slot v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

interface OrderItem {
  id: number;
  [key: string]: any; // Allows dynamic keys like position, order, rank, etc.
}

export default defineComponent({
  name: 'NOrderList',
  props: {
    items: {
      type: Array as () => OrderItem[],
      required: true,
    },
    orderKey: {
      type: String,
      default: 'position', // Default key (can be overridden)
    },
    updateUrl: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    modelName: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const items = ref([...props.items]);
    let draggedIndex = -1;

    // Keep sortedItems reactive
    const sortedItems = computed(() =>
      [...items.value].sort((a, b) => (a[props.orderKey] ?? 0) - (b[props.orderKey] ?? 0))
    );

    // Watch for external updates to `items`
    watch(
      () => props.items,
      (newItems) => {
        items.value = [...newItems];
      },
      { deep: true, immediate: true }
    );

    const onDragStart = (index: number) => {
      draggedIndex = index;
    };

    const onDrop = async (targetIndex: number) => {
      if (props.loading || draggedIndex === targetIndex) return;

      const movedItem = items.value.splice(draggedIndex, 1)[0];
      items.value.splice(targetIndex, 0, movedItem);

      // Update order dynamically based on orderKey
      items.value.forEach((item, index) => {
        item[props.orderKey] = index + 1;
      });

      // Ensure the request body contains only `id` and the correct orderKey
      const reorderedItems = items.value.map((item) => ({
        id: item.id,
        [props.orderKey]: item[props.orderKey],
      }));

      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }
        if (props.accessToken) {
          headers['Authorization'] = `Bearer ${props.accessToken}`;
        }
        await fetch(props.updateUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ [props.modelName]: reorderedItems }),
        });
      } catch (error) {
        console.error('Failed to update order:', error);
      }
    };

    return { sortedItems, onDragStart, onDrop };
  },
});
</script>

<style scoped>
.list-container {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  cursor: grab;
  user-select: none;
  transition: opacity 0.3s;
}

.list-item:active {
  opacity: 0.6;
}

/* Loading State */
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
