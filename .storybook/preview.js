// .storybook/preview.ts
/** @type { import('@storybook/vue3').Preview } */
import '@mdi/font/css/materialdesignicons.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
