<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, defineExpose, defineProps, defineEmits, defineAsyncComponent } from 'vue';
import './NModal.css';

// Lazy‑load button to avoid bundling cost
const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

/* --------------------------------------------------------------------------
 * Props & emits
 * -------------------------------------------------------------------------- */
const props = defineProps({
  /** Whether the modal is open (v‑model) */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /** Optional heading text */
  title: {
    type: String,
    default: '',
  },
  /** Label for the default trigger button */
  buttonLabel: {
    type: String,
    default: 'Open Modal',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}>();

/* --------------------------------------------------------------------------
 * Reactive state
 * -------------------------------------------------------------------------- */
const isOpen = ref(props.modelValue);

// Keep internal & external state in sync
watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  },
);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
  val ? emit('open') : emit('close');
});

/* --------------------------------------------------------------------------
 * Open / close helpers
 * -------------------------------------------------------------------------- */
const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};

/* --------------------------------------------------------------------------
 * UX niceties
 * -------------------------------------------------------------------------- */
const modalTitle = computed(() => props.title);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));

/* --------------------------------------------------------------------------
 * Expose a tiny public API for parent refs
 * -------------------------------------------------------------------------- */
defineExpose({ openModal, closeModal, isOpen });
</script>

<template>
  <!-- Trigger button (default or custom) -->
  <slot name="trigger" :openModal="openModal">
    <NButton
      :label="buttonLabel"
      class="n-modal__trigger"
      @click="openModal"
    />
  </slot>

  <!-- Overlay & modal content -->
  <transition name="n-modal-fade">
    <div
      v-if="isOpen"
      class="n-modal__overlay"
      @click.self="closeModal"
      role="dialog"
      aria-modal="true"
    >
      <div class="n-modal n-container-style">
        <!-- Header -->
        <header class="n-modal__header">
          <slot name="header">
            <h2 v-if="modalTitle" class="n-modal__title">{{ modalTitle }}</h2>
            <NButton
              class="n-modal__close-button"
              icon="x"
              @click="closeModal"
            />
          </slot>
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

<style scoped>
/* Basic overlay fallback in case the design‑system class isn’t available */
.n-modal__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
}
</style>
