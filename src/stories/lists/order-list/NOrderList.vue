<script lang="ts">
import { defineComponent, ref, computed, watch, nextTick } from 'vue';

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
      default: 'position',
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
    let draggedId = ref<number | null>(null);

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

    const onDragStart = (event: DragEvent, id: number) => {
      draggedId.value = id;

      // Create an empty drag image
      const emptyImage = document.createElement("div");
      emptyImage.style.width = "1px";
      emptyImage.style.height = "1px";
      emptyImage.style.opacity = "0";
      document.body.appendChild(emptyImage);

      // Set it as the drag image
      event.dataTransfer?.setDragImage(emptyImage, 0, 0);

      // Cleanup: Remove the element after drag starts
      setTimeout(() => document.body.removeChild(emptyImage), 0);
    };

    const reorder = (event: DragEvent, id: number) => {
      event.preventDefault();
      if (props.loading || draggedId.value === null) return;

      const draggedIndex = items.value.findIndex((item) => item.id === draggedId.value);
      const targetIndex = items.value.findIndex((item) => item.id === id);

      if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) return;

      // Remove the dragged item
      const [draggedItem] = items.value.splice(draggedIndex, 1);

      // Insert at the new position
      items.value.splice(targetIndex, 0, draggedItem);

      // Update order dynamically based on orderKey
      items.value.forEach((item, index) => {
        item[props.orderKey] = index + 1;
      });
    };

    const onDrop = async (targetId: number) => {
      console.log('dropped')
      // if (props.loading || draggedId.value === targetId) return;

    

      // Prepare payload with `id` and updated `orderKey`
      const reorderedItems = items.value.map((item) => ({
        id: item.id,
        [props.orderKey]: item[props.orderKey],
      }));

      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        if (props.accessToken) {
          headers['Authorization'] = `Bearer ${props.accessToken}`;
        }
        await fetch(props.updateUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify({ [props.modelName]: reorderedItems }),
        });
      } catch (error) {
        console.error('Failed to update order:', error);
      } finally {
        draggedId.value = null;
      }
    };

    return { sortedItems, onDragStart, onDrop, reorder, draggedId };
  },
});
</script>

<template>
  <div class="list-container">
    <div v-if="loading" class="loading-overlay">
      <p>Loading...</p>
    </div>
    <ul role="list" :class="{ disabled: loading }">
      <li
        v-for="item in sortedItems"
        :key="item.id"
        :class="`list-item ` + (item.id == draggedId ? 'dragging' : '')"
        role="listitem"
        draggable="true"
        :aria-disabled="loading"
        @dragstart="loading ? null : onDragStart($event, item.id)"
        @dragover="reorder($event, item.id)"
        @drop="loading ? null : onDrop(item.id)"
      >
        <slot v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 10px;
  cursor: move;
  user-select: none;
  transition: 0s;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

</style>
