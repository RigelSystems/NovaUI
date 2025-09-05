// .storybook/preview.ts
/** @type { import('@storybook/vue3').Preview } */
import '@mdi/font/css/materialdesignicons.css';
import '../src/assets/shared.css';

import { initialize, mswLoader } from 'msw-storybook-addon';
 
/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview = {
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
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
