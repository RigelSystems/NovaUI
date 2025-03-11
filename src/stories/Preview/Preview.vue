<script lang="ts">
  import { defineComponent, computed, inject, defineAsyncComponent } from 'vue';
  import "./Preview.css";
  import { NovaUIConfigSymbol } from '../../../index';

  const NHeroSection = defineAsyncComponent(() => import('../NHeroSection/NHeroSection.vue'));
  const NDropdown = defineAsyncComponent(() => import('../NDropdown/NDropdown.vue'));
  const NRow = defineAsyncComponent(() => import('../NRow/NRow.vue'));
  const NCard = defineAsyncComponent(() => import('../NCard/NCard.vue'));
  const NNavigationBar = defineAsyncComponent(() => import('../NNavigationBar/NNavigationBar.vue'));
  const NTextInput = defineAsyncComponent(() => import('../NTextInput/NTextInput.vue'));
  const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));

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
      NHeroSection,
      NDropdown,
      NTextInput,
      NButton,
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

    <NHeroSection title="Hero Section Title" subtitle="Hero Section Subtitle" content="Some example text for this hero section" :actionButtons="[{label: 'Action Button', url: '/home'}]" />

    <NRow :cols="{sm: [100], md: [60,40, 40, 60], lg: [33.33,33.33,33.33]}">
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    </NRow>

    <NRow :cols="{sm: [100], md: [33.3,33.3,33.3]}">
      <NDropdown label="Click Me" content="Some hidden information!" />
      <NDropdown label="Don't click me!" content="What did I say..." />
      <NDropdown label="Ummmmm" content="Wow, you're an explorer!" />
    </NRow>

    <h2>Contact Form</h2>
    <p>Please enter your details below and we'll contact you shortly!</p>

    <NRow :cols="{sm: [100], md: [50,50,100,100]}">
      <NTextInput label="First Name" placeholder="John" />
      <NTextInput label="Last Name" placeholder="Doe" />
      <NTextInput label="Email" placeholder="Enter your email address" />
      <NTextInput label="Message" placeholder="Enter your message here" />
      <NButton label="Submit" />
    </NRow>

  </div>
</template>
