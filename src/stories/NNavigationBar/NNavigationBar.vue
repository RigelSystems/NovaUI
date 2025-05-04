<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import './NNavigationBar.css';


interface NavigationLink {
  label: string;
  url: string;
  icon?: string;
  visible?: boolean;
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
    showMobileBottomLinks: {
      type: Boolean,
      default: false,
    },
    currentPath: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const applyBodyPadding = (padding: boolean) => {
      if (padding) {
        document.body.style.paddingBottom = '6rem';
      } else {
        document.body.style.paddingBottom = '';
      }
    };

    onMounted(() => {
      applyBodyPadding(props.showMobileBottomLinks);
    });

    watch(() => props.showMobileBottomLinks, (newVal) => {
      applyBodyPadding(newVal);
    });

    onBeforeUnmount(() => {
      document.body.style.paddingBottom = '';
    });

    const isOpen = ref(false);
    const visibleLinks = computed(() =>
      props.links.filter(link => link.visible !== false)
    )
    const currentPath = computed(() => props.currentPath)
    const showMobileBottomLinks = ref(props.showMobileBottomLinks);
    const mobileBottomLinks = computed(() =>
      props.mobileBottomLinks.filter(link => link.visible !== false)
    )

    function toggleSidebar() {
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      visibleLinks,
      showMobileBottomLinks,
      mobileBottomLinks,
      currentPath,
      toggleSidebar,
    };
  },
});
</script>

<template>
  <nav class="n-navigation-bar n-container-style">
    <!-- Desktop Nav -->
    <div class="image-slot">
      <slot name="image" v-if="$slots.image"></slot>
    </div>
    <ul class="n-navigation-bar__desktop-nav">
      <li v-for="link in visibleLinks" :key="link.url" :class="{ 'n-navigation-bar__desktop--active': currentPath === link.url }">
        <a :href="link.url">{{ link.label }}</a>
      </li>
    </ul>
    <div>
      <slot name="user" v-if="$slots.user"></slot>
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-button" @click="toggleSidebar">☰</button>

    <!-- Mobile Sidebar -->
    <div class="sidebar" :class="{ open: isOpen }">
      <button class="close-button" @click="toggleSidebar">×</button>
      
      <!-- Main Mobile Navigation -->
      <ul class="n-navigation-bar__mobile-nav">
        <li v-for="link in visibleLinks" :key="link.url" :class="{ 'n-navigation-bar__mobile--active': currentPath === link.url }">
          <a :href="link.url">{{ link.label }}</a>
        </li>
      </ul>
    </div>
    
    <!-- Overlay (dark background on mobile) -->
    <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>
  </nav>
  
  <div class="n-navigation-bar__bottom-nav n-container-style" v-if="mobileBottomLinks.length > 0 && showMobileBottomLinks">
    <ul>
      <li v-for="link in mobileBottomLinks" :key="link.url" :class="{ 'n-navigation-bar__mobile-bottom--active': currentPath === link.url }">
        <a :href="link.url">
          <span :class="['mdi', link.icon]" v-if="link.icon"></span>
          <span class="label" v-if="link.label">{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<style>
body {
  padding-bottom: 5rem;
}
</style>