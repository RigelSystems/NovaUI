<template>
    <div class="list-container">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="list-item"
        draggable="true"
        @dragstart="onDragStart(index)"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        {{ item.name }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface ListItem {
    id: number;
    name: string;
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
  
          // Send reorder request
          try {
            await fetch(props.updateUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ reorderedItems: items.value }),
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
  