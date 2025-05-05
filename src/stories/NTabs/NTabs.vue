<template>
  <div class="n-tabs">
    <!-- header -->
    <div class="n-tabs-header">
      <!-- named slot “tabs” gets state + setter -->
      <slot name="tabs"
            :activeTab="activeTab"
            :setActiveTab="setActiveTab" />
    </div>

    <!-- body -->
    <div class="n-tabs-body">
      <!-- default slot ALSO gets state
           (we only expose activeTab here – setter isn’t needed) -->
      <slot :activeTab="activeTab"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NTabs',
  data() {
    return { activeTab: 0 };
  },
  methods: {
    setActiveTab(index: number) {
      this.activeTab = index;
    },
  },
});
</script>

<style scoped>
.n-tabs      { border: 1px solid #ccc; border-radius: 6px; overflow: hidden; }
.n-tabs-header { display: flex; background: #f9f9f9; border-bottom: 1px solid #ddd; }
.n-tabs-body { padding: 1rem; }
</style>
