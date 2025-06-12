# NovaUI Component File Structure

Naming: Componets are all prefixed with N{copmonent}

## Directory Structure
Each component should be organized in the following structure:
```
src/stories/<ComponentName>/
├── <ComponentName>.vue       # Main Vue 3 component
├── <ComponentName>.css       # Scoped component-specific styles (empty by default)
├── <ComponentName>.spec.ts   # Vitest unit tests with @testing-library/vue
└── <ComponentName>.stories.js # Storybook story
```

## Component Template
Here's the standard template for new Vue 3 components:

```vue
<script lang="ts">
import "./<ComponentName>.css";
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "<ComponentName>",
  props: {
    /* propName: { type: <Type>, default: <Default> } */
  },
  emits: [/* "update:modelValue", "click", … */],
  setup(props, { emit }) {
    const someRef = ref();
    const someComputed = computed(() => { /* … */ });

    const someMethod = () => { /* … */ };

    return {
      someRef,
      someComputed,
      someMethod,
    };
  },
});
</script>

<template>
  <!-- component markup here -->
</template>

<style scoped>
/* Optional extra styles */
</style>
```

## Component Registration
All components must be registered in `index.ts`:

1. Import the component:
```typescript
import MyComponent from './src/stories/MyComponent/MyComponent.vue';
```

2. Register it globally in the plugin install method:
```typescript
app.component('MyComponent', MyComponent);
```

Note: Cursor will handle this registration automatically based on the script logic.