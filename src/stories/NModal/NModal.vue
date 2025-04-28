<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import './NModal.css';

export default defineComponent({
  name: 'NModal',
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const isOpen = ref(false);

    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    const title = computed(() => props.title);

    return {
      isOpen,
      openModal,
      closeModal,
      title,
    };
  },
});
</script>

<template>
  <!-- Trigger button -->
  <button class="n-modal__trigger" @click="openModal">
    <slot name="trigger">Open Modal</slot>
  </button>

  <!-- Overlay & Modal content -->
  <transition name="n-modal-fade">
    <div v-if="isOpen" class="n-modal__overlay" @click.self="closeModal">
      <div class="n-modal" role="dialog" aria-modal="true">
        <!-- Header -->
        <header class="n-modal__header">
          <h2 class="n-modal__title">{{ title }}</h2>
          <button class="n-modal__close" @click="closeModal" aria-label="Close">&times;</button>
        </header>

        <!-- Body -->
        <section class="n-modal__body">
          <slot />
        </section>

        <!-- Footer (optional) -->
        <footer v-if="$slots.footer" class="n-modal__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>
