<script lang="ts">
  import { defineComponent, computed, inject, defineAsyncComponent } from 'vue';
  
  import "./Preview.css";

  const NHeroSection = defineAsyncComponent(() => import('../NHeroSection/NHeroSection.vue'));
  const NDropdown = defineAsyncComponent(() => import('../NDropdown/NDropdown.vue'));
  const NRow = defineAsyncComponent(() => import('../NRow/NRow.vue'));
  const NCard = defineAsyncComponent(() => import('../NCard/NCard.vue'));
  const NNavigationBar = defineAsyncComponent(() => import('../NNavigationBar/NNavigationBar.vue'));
  const NTextInput = defineAsyncComponent(() => import('../NTextInput/NTextInput.vue'));
  const NButton = defineAsyncComponent(() => import('../NButton/NButton.vue'));
  const NDashboardTile = defineAsyncComponent(() => import('../NDashboardTile/NDashboardTile.vue'));

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
      NDashboardTile,
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
      return {
        links,
      };
    },
  });
</script>

<template>
  <div class="preview">
    <NNavigationBar :links="links"/>

    <NHeroSection title="Hero Section Title" subtitle="Hero Section Subtitle" content="Some example text for this hero section" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
    <NHeroSection title="Hero Section Title" subtitle="Hero Section Subtitle" content="Some example text for this hero section" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
    <NHeroSection title="Hero Section Title" subtitle="Hero Section Subtitle" content="Some example text for this hero section" :actionButtons="[{label: 'Action Button', href: '/home'}]" />

    <NRow :cols="{sm: [100], md: [60,40,40,60], lg: [33.33,33.33,33.33]}" title="Row Title" subtitle="Row Subtitle" :style="{background: '#f5f5f5', padding: '1rem'}">
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home', primary: true}, {label: 'Action Button', href: '/home', primary: false}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
    </NRow>

    <hr>

    <h3>Dropdowns</h3>

    <NRow :cols="{sm: [100], md: [33.3,33.3,33.3]}">
      <NDropdown label="Click Me" content="Some hidden information!" />
      <NDropdown label="Don't click me!" content="What did I say..." />
      <NDropdown label="Ummmmm" content="Wow, you're an explorer!" />
    </NRow>

    <hr>

    <h2>Contact Form</h2>
    <p>Please enter your details below and we'll contact you shortly!</p>

    <NRow :cols="{sm: [100], md: [50,50,100,100]}">
      <NTextInput label="First Name" placeholder="John" />
      <NTextInput label="Last Name" placeholder="Doe" />
      <NTextInput label="Email" placeholder="Enter your email address" />
      <NTextInput label="Message" placeholder="Enter your message here" />
      <NButton label="Submit" />
    </NRow>

    <NRow :cols="{sm: [100], md: [50,50,100,100]}">
      <NDashboardTile
        :title="'Tile 1'"
        :value="'value 1'"
        :icon="'mdi-home'"
        :bottomText="'Bottom Text 1'"
        :style="{background: '#fff', padding: '1rem', borderRadius: '8px'}"
      ></NDashboardTile>
      <NDashboardTile
        :title="'Tile 1'"
        :value="'value 1'"
        :icon="'mdi-home'"
        :bottomText="'Bottom Text 1'"
        :style="{background: '#fff', padding: '1rem', borderRadius: '8px'}"
      ></NDashboardTile>
      <NDashboardTile
        :title="'Tile 1'"
        :value="'value 1'"
        :icon="'mdi-home'"
        :bottomText="'Bottom Text 1'"
        :style="{background: '#fff', padding: '1rem', borderRadius: '8px'}"
      ></NDashboardTile>
      <NDashboardTile
        :title="'Tile 1'"
        :value="'value 1'"
        :icon="'mdi-home'"
        :bottomText="'Bottom Text 1'"
        :style="{background: '#fff', padding: '1rem', borderRadius: '8px'}"
      ></NDashboardTile>
    </NRow>

  </div>
</template>
