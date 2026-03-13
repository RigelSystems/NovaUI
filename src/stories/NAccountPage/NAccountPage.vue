<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import './NAccountPage.css'

export interface NAccountPageUser {
  name?: string
  email?: string
  image?: string
}

export default defineComponent({
  name: 'NAccountPage',
  props: {
    user: {
      type: Object as () => NAccountPageUser,
      default: () => ({}),
    },
    tabs: {
      type: Array as () => string[],
      default: () => [],
    },
    badge: {
      type: String,
      default: '',
    },
    badgePremium: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const activeTab = ref(0)

    const initials = computed(() => {
      const source = props.user.name || props.user.email || '?'
      return source
        .split(/[\s@.]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(s => s[0].toUpperCase())
        .join('')
    })

    return { activeTab, initials }
  },
})
</script>

<template>
  <div class="n-account-page">

    <!-- Profile header -->
    <div class="n-account-header">
      <div class="n-account-header__avatar">
        <img v-if="user.image" :src="user.image" alt="avatar" class="n-account-header__avatar-img" />
        <span v-else class="n-account-header__avatar-initials">{{ initials }}</span>
      </div>

      <div class="n-account-header__info">
        <div class="n-account-header__name-row">
          <h2 class="n-account-header__name">{{ user.name || user.email || 'Account' }}</h2>
          <span
            v-if="badge"
            class="n-account-header__badge"
            :class="badgePremium ? 'n-account-header__badge--premium' : 'n-account-header__badge--free'"
          >{{ badge }}</span>
        </div>
        <p v-if="user.name && user.email" class="n-account-header__email">{{ user.email }}</p>
      </div>
    </div>

    <!-- Tab bar + content -->
    <div class="n-account-body">
      <div class="n-account-tabs" v-if="tabs.length > 0">
        <button
          v-for="(tab, i) in tabs"
          :key="tab"
          class="n-account-tab"
          :class="{ 'n-account-tab--active': activeTab === i }"
          @click="activeTab = i"
        >{{ tab }}</button>
      </div>

      <div class="n-account-content">
        <slot :activeTab="activeTab" />
      </div>
    </div>

  </div>
</template>
