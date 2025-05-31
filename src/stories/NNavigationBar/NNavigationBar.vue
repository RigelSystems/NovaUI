<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import './NNavigationBar.css';

interface NavigationLink {
  label: string;
  url: string;
  icon?: string;
  visible?: boolean;
  dropdown?: NavigationLink[];
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
      document.addEventListener('click', handleDocumentClick);
    });

    watch(() => props.showMobileBottomLinks, (newVal) => {
      applyBodyPadding(newVal);
    });

    onBeforeUnmount(() => {
      document.body.style.paddingBottom = '';
      document.removeEventListener('click', handleDocumentClick);
    });

    const isOpen = ref(false);
    const activeDropdown = ref<string | null>(null);
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

    function toggleDropdown(label: string, event?: MouseEvent) {
      if (event) {
        event.stopPropagation();
      }
      activeDropdown.value = activeDropdown.value === label ? null : label;
    }

    function handleDocumentClick(event: MouseEvent) {
      if (activeDropdown.value !== null) {
        activeDropdown.value = null;
      }
    }

    function isDropdownActive(label: string) {
      return activeDropdown.value === label;
    }

    return {
      isOpen,
      visibleLinks,
      showMobileBottomLinks,
      mobileBottomLinks,
      currentPath,
      toggleSidebar,
      toggleDropdown,
      isDropdownActive,
    };
  },
});
</script>

<template>
  <nav class="n-navigation-bar n-container-style">
    <!-- Desktop Nav -->
    <div class="logo-slot">
      <slot name="logo" v-if="$slots.logo"></slot>
    </div>
    <ul class="n-navigation-bar__desktop-nav">
      <li v-for="link in visibleLinks" :key="link.url" 
          :class="{ 
            'n-navigation-bar__desktop--active': currentPath === link.url,
            'has-dropdown': link.dropdown,
            'dropdown-active': isDropdownActive(link.label)
          }">
        <template v-if="link.dropdown">
          <button type="button" @click="(e) => toggleDropdown(link.label, e)">
            {{ link.label }}
            <span class="mdi mdi-chevron-up mdi-chevron-up"></span>
          </button>
          <ul class="dropdown-menu" :class="{ 'show': isDropdownActive(link.label) }" @click.stop>
            <li v-for="subLink in link.dropdown" :key="subLink.url" 
                :class="{ 'active': currentPath === subLink.url }">
              <a :href="subLink.url">{{ subLink.label }}</a>
            </li>
          </ul>
        </template>
        <a v-else :href="link.url">{{ link.label }}</a>
      </li>
    </ul>
    <div class="user-slot">
      <slot name="user" v-if="$slots.user"></slot>
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-button" @click="toggleSidebar">☰</button>

    <!-- Mobile Sidebar -->
    <div class="sidebar" :class="{ open: isOpen }">
      <button class="close-button" @click="toggleSidebar">×</button>
      
      <!-- Main Mobile Navigation -->
      <ul class="n-navigation-bar__mobile-nav">
        <li v-for="link in visibleLinks" :key="link.url" 
            :class="{ 
              'n-navigation-bar__mobile--active': currentPath === link.url,
              'has-dropdown': link.dropdown,
              'dropdown-active': isDropdownActive(link.label)
            }">
          <template v-if="link.dropdown">
            <a href="#" @click="(e) => toggleDropdown(link.label, e)">
              {{ link.label }}
              <span class="mdi mdi-chevron-up mdi-chevron-up"></span>
            </a>
            <ul class="mobile-dropdown-menu" :class="{ 'show': isDropdownActive(link.label) }" @click.stop>
              <li v-for="subLink in link.dropdown" :key="subLink.url" 
                  :class="{ 'active': currentPath === subLink.url }">
                <a :href="subLink.url">{{ subLink.label }}</a>
              </li>
            </ul>
          </template>
          <a v-else :href="link.url">{{ link.label }}</a>
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
  padding-top: 60px;
  padding-bottom: 5rem;
}

.n-navigation-bar__desktop-nav li {
  position: relative;
  display: inline-block;
}

.n-navigation-bar__desktop-nav li a {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  min-width: 200px;
  z-index: 1000;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  padding: 10px 15px;
  display: block;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background: #f5f5f5;
}

.mdi-chevron-up {
  transition: transform 0.2s ease;
  font-size: 1.2em;
}

.dropdown-active .mdi-chevron-up {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  display: none;
  padding-left: 20px;
  background: transparent;
}

.mobile-dropdown-menu.show {
  display: block;
}

.mobile-dropdown-menu li {
  padding: 0;
}

.mobile-dropdown-menu a {
  padding: 10px 15px;
  display: block;
  color: inherit;
  text-decoration: none;
}

.mobile-dropdown-menu a:hover {
  background: rgba(0, 0, 0, 0.05);
}

.has-dropdown > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
