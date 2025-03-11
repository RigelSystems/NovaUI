import { type App, type Plugin } from 'vue';
import NButton from './src/stories/NButton/NButton.vue';
import NOrderList from './src/stories/lists/order-list/NOrderList.vue';
import NDropdown from './src/stories/NDropdown/NDropdown.vue';
import NNavigationBar from './src/stories/NNavigationBar/NNavigationBar.vue';
import Preview from './src/stories/Preview/Preview.vue';
import NCard from './src/stories/NCard/NCard.vue';
import NRow from './src/stories/NRow/NRow.vue';
import NHeroSection from './src/stories/NHeroSection/NHeroSection.vue';
import NTextInput from './src/stories/NTextInput/NTextInput.vue';

function adjustColor(hex: string, percent: number): string {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  r = Math.round(r * (1 + percent));
  g = Math.round(g * (1 + percent));
  b = Math.round(b * (1 + percent));

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export interface NovaUIOptions {
  theme?: string;
  themeLight?: string;
  themeDark?: string;
  borderRadius?: string;
}

// Symbol if you need to provide/inject config (optional)
export const NovaUIConfigSymbol = Symbol('NovaUIConfig');

// Define the plugin as a plain Plugin, no generics
const NovaUI: Plugin = {
  install(app: App, options?: NovaUIOptions) {
    // Default base theme color
    const defaultTheme = options?.theme || '#007bff'; // Default to blue

    // Generate color variations
    const themeLight = adjustColor(defaultTheme, 0.2); // +20% brightness
    const themeDark = adjustColor(defaultTheme, -0.2); // -20% brightness

    // Merge options
    const finalConfig: Required<NovaUIOptions> = {
      theme: defaultTheme,
      themeLight,
      themeDark,
      borderRadius: options?.borderRadius || '8px',
    };

    // Provide the theme globally
    app.provide(NovaUIConfigSymbol, finalConfig);

    // Register components globally
    app.component('NButton', NButton);
    app.component('NTextInput', NTextInput);
    app.component('NHeroSection', NHeroSection);
    app.component('NRow', NRow);
    app.component('NCard', NCard);
    app.component('Preview', Preview);
    app.component('NNavigationBar', NNavigationBar);
    app.component('NDropdown', NDropdown);
    app.component('NOrderList', NOrderList);
  }
};

export default NovaUI;
