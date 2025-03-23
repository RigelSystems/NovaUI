import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import '@mdi/font/css/materialdesignicons.css'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
