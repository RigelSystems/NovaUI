<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import "./Preview.css";
  import NNavigationBar from '../NNavigationBar/NNavigationBar.vue';
  import NCard from '../NCard/NCard.vue';
  import NRow from '../NRow/NRow.vue';
  import { NovaUIConfigSymbol } from '../../../index';

  interface Link {
    label: string;
    url: string;
  }

  export default defineComponent({
    name: "Preview",
    components: {
      NNavigationBar,
      NCard,
      NRow,
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
    <NRow :cols="{sm: [100], md: [60,40], lg: [33.33,33.33,33.33]}">
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    </NRow>
  </div>
</template>
