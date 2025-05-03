import { join } from 'path';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (viteConfig) => {
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = viteConfig.resolve.alias || {};
    viteConfig.resolve.alias['msw'] = join(process.cwd(), 'node_modules/msw');
    return viteConfig;
  },
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/favicon.png">
  `,
  previewHead: (head) => `
    ${head}
    <link rel="icon" href="/favicon.png">
    <link rel="stylesheet" href="./src/assets/shared.css" />
  `,
};

export default config;
