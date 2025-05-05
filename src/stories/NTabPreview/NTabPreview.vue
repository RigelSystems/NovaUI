<template>
  <n-tabs>
    <!-- header / buttons -->
    <template #tabs="{ activeTab, setActiveTab }">
      <n-tab
        label="Overview"
        :active="activeTab === 0"
        @click="setActiveTab(0)"
      />
      <n-tab
        label="Details"
        :active="activeTab === 1"
        @click="setActiveTab(1)"
      />
    </template>

    <!-- body / panels -->
    <template #default="{ activeTab }">
      <n-tab-panel :index="0" :activeTab="activeTab">
        <p>This is the Overview content.</p>
      </n-tab-panel>
      <n-tab-panel :index="1" :activeTab="activeTab">
        <p>This is the Details content.</p>
      </n-tab-panel>
    </template>
  </n-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NTabs from '../NTabs/NTabs.vue';
import NTab from '../NTab/NTab.vue';
import NTabPanel from '../NTabPanel/NTabPanel.vue';

export default defineComponent({
  name: 'NTabPreview',
  components: { NTabs, NTab, NTabPanel },
});
</script>
