<script lang="ts">
  import { defineComponent, computed, inject, ref } from 'vue';
  import "./NNavigationBar.css";
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
        required: false,
      },
    },
    setup(props) {
      const links = ref(props.links)
      const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

      return {
        novaConfig,
        links,
      };
    },
  });
</script>

<template>
  <nav class="n-navigation-bar">
    <ul>
      <li v-for="link in links" :style="{ color: novaConfig.theme }">
        <a :href="link.url">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

