import { type App, type Plugin } from 'vue';
import NButton from './src/stories/button/NButton.vue';
import NOrderList from './src/stories/lists/order-list/NOrderList.vue';
import NDropdown from './src/stories/NDropdown/NDropdown.vue';
import NNavigationBar from './src/stories/NNavigationBar/NNavigationBar.vue';

import Preview from './src/stories/Preview/Preview.vue';

export interface NovaUIOptions {
  theme?: string;
  borderRadius?: string;
}

// Symbol if you need to provide/inject config (optional)
export const NovaUIConfigSymbol = Symbol('NovaUIConfig');

// Define the plugin as a plain Plugin, no generics
const NovaUI: Plugin = {
  install(app: App, options?: NovaUIOptions) {
    // Default config
    const defaultConfig: Required<NovaUIOptions> = {
      theme: 'blue',
      borderRadius: '8px'
    };

    // Merge defaults with user-provided options
    const finalConfig = { ...defaultConfig, ...options };
    // Provide globally if needed
    app.provide(NovaUIConfigSymbol, finalConfig);

    // Register components globally
    app.component('NButton', NButton);
    app.component('Preview', Preview);
    app.component('NNavigationBar', NNavigationBar);
    app.component('NDropdown', NDropdown);
    app.component('NOrderList', NOrderList);
  }
};

export default NovaUI;
