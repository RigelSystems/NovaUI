<template>
  <div class="list-container">
    <ul role="list">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        class="list-item"
        role="listitem"
        draggable="true"
        @dragstart="onDragStart(index)"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div v-html="item.body"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  id: number;
  body: string;
}

interface UpdateItem {
  id: number;
  order: number;
}

export default defineComponent({
  name: 'NList',
  props: {
    initialItems: {
      type: Array as () => ListItem[],
      required: true,
    },
    updateUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const items = ref([...props.initialItems]);
    let draggedIndex = -1;

    const onDragStart = (index: number) => {
      draggedIndex = index;
    };

    const onDrop = async (targetIndex: number) => {
      if (draggedIndex !== targetIndex) {
        // Swap items in the list
        const movedItem = items.value.splice(draggedIndex, 1)[0];
        items.value.splice(targetIndex, 0, movedItem);

        // Create only `id` and `order` objects
        const reorderedItems: UpdateItem[] = items.value.map((item, index) => ({
          id: item.id,
          position: index + 1,
        }));

        // Send reorder request
        try {
          await fetch(props.updateUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reorderedItems }),
          });
        } catch (error) {
          console.error('Failed to update order:', error);
        }
      }
    };

    return { items, onDragStart, onDrop };
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
}

.list-item {
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  cursor: grab;
  user-select: none;
}

.list-item:active {
  opacity: 0.6;
}
</style>
