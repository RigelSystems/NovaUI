import { App } from 'vue';
import HelloWorld from './src/components/HelloWorld.vue';

const NovaUI = {
  install(app: App) {
    app.component('HelloWorld', HelloWorld);
  }
};

export default NovaUI;
export { HelloWorld }; // Export individual components if needed
