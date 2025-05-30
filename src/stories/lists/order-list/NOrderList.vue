<script lang="ts">
import { defineComponent, ref, computed, watch, nextTick } from 'vue';
import './NOrderList.css';

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
  <div class="n-order-list">
    <div v-if="loading" class="n-order-list__loading-overlay">
      <p>Loading...</p>
    </div>
    <ul role="list" :class="{ 'n-order-list__disabled': loading }">
      <li
        v-for="item in sortedItems"
        :key="item.id"
        :class="`n-order-list__list-item ` + (item.id == draggedId ? 'n-order-list__dragging' : '')"
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
