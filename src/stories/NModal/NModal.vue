<script lang="ts">
import "./NModal.css";
import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
} from "vue";

const NButton = defineAsyncComponent(() => import("../NButton/NButton.vue"));

export default defineComponent({
  name: "NModal",
  components: {
    NButton,
  },
  props: {
    /** Whether the modal is open (v-model) */
    modelValue: {
      type: Boolean,
      default: false,
    },
    /** Optional heading text */
    title: {
      type: String,
      default: "",
    },
    /** Label for the default trigger button */
    buttonLabel: {
      type: String,
      default: "Open Modal",
    },
  },
  emits: ["update:modelValue", "open", "close"],
  setup(props, { emit, expose }) {
    /* reactive state -------------------------------------------------- */
    const isOpen = ref<boolean>(props.modelValue);

    /* keep internal & external state in sync -------------------------- */
    watch(
      () => props.modelValue,
      (val) => {
        isOpen.value = val;
      },
    );

    watch(isOpen, (val) => {
      emit("update:modelValue", val);
      val ? emit("open") : emit("close");
    });

    /* computed -------------------------------------------------------- */
    const modalTitle = computed(() => props.title);

    /* methods --------------------------------------------------------- */
    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    /* UX niceties ----------------------------------------------------- */
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    onMounted(() => window.addEventListener("keydown", handleKeydown));
    onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));

    /* expose public API ---------------------------------------------- */
    expose({ openModal, closeModal, isOpen });

    /* expose to template --------------------------------------------- */
    return {
      isOpen,
      modalTitle,
      openModal,
      closeModal,
    };
  },
});
</script>

<template>
  <!-- Trigger button (default or custom) -->
  <slot name="trigger" :openModal="openModal">
    <NButton
      :label="$props.buttonLabel"
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
              label="Close"
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
