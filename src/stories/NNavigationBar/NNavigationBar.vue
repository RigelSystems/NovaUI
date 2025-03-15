<script lang="ts">
import { defineComponent, ref, inject } from 'vue';
import './NNavigationBar.css';
import { NovaUIConfigSymbol } from '../../../index';

interface NavigationLink {
  label: string;
  url: string;
}

export default defineComponent({
  name: "NNavigationBar",
  props: {
    links: {
      type: Array as () => NavigationLink[],
      default: () => [],
    },
    mobileBottomLinks: {
      type: Array as () => NavigationLink[],
      default: () => [],
    },
  },
  setup(props) {
    const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });
    const isOpen = ref(false);

    function toggleSidebar() {
      isOpen.value = !isOpen.value;
    }

    return {
      novaConfig,
      isOpen,
      toggleSidebar,
      links: props.links,
      mobileBottomLinks: props.mobileBottomLinks,
    };
  },
});
</script>

<template>
  <nav class="n-navigation-bar">
    <!-- Desktop Nav -->
    <ul class="n-navigation-bar__desktop-nav">
      <li v-for="link in links" :key="link.url" :style="{ color: novaConfig.theme }">
        <a :href="link.url">{{ link.label }}</a>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button class="menu-button" @click="toggleSidebar">☰</button>

    <!-- Mobile Sidebar -->
    <div class="sidebar" :class="{ open: isOpen }">
      <button class="close-button" @click="toggleSidebar">×</button>
      
      <!-- Main Mobile Navigation -->
      <ul class="n-navigation-bar__mobile-nav">
        <li v-for="link in links" :key="link.url" :style="{ color: novaConfig.theme }">
          <a :href="link.url">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Mobile Bottom Links -->
      <ul v-if="mobileBottomLinks.length" class="n-navigation-bar__mobile-bottom-nav">
        <li v-for="link in mobileBottomLinks" :key="link.url" :style="{ color: novaConfig.theme }">
          <a :href="link.url">{{ link.label }}</a>
        </li>
      </ul>
    </div>

    <!-- Overlay (dark background on mobile) -->
    <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>
  </nav>

  <div class="n-navigation-bar__bottom-nav" v-if="mobileBottomLinks.length > 0">
      <ul>
        <li v-for="link in mobileBottomLinks" :key="link.url">
          <a :href="link.url">
            <span class="label">{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </div>
</template>
