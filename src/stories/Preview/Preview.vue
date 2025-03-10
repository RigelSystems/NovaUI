<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import "./Preview.css";
  import NNavigationBar from '../NNavigationBar/NNavigationBar.vue';
  import { NovaUIConfigSymbol } from '../../../index';

  interface Link {
    label: string;
    url: string;
  }

  export default defineComponent({
    name: "Preview",
    components: {
      NNavigationBar,
    },
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const links = computed<Link[]>(() => [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' },
      ]);
      const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

      return {
        novaConfig,
        links,
      };
    },
  });
</script>

<template>
  <div class="preview">
    <NNavigationBar :links="links"/>
  </div>
</template>
