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
import NPaint from './src/stories/NPaint/NPaint.vue';
import NTimeline from './src/stories/NTimeline/NTimeline.vue';
import NNotificationList from './src/stories/NNotificationList/NNotificationList.vue';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/shared.css';

// Define the plugin as a plain Plugin, no generics
const NovaUI: Plugin = {
  install(app: App) {
    app.component('NButton', NButton);
    app.component('NPaint', NPaint);
    app.component('NTextInput', NTextInput);
    app.component('NHeroSection', NHeroSection);
    app.component('NRow', NRow);
    app.component('NCard', NCard);
    app.component('Preview', Preview);
    app.component('NNavigationBar', NNavigationBar);
    app.component('NDropdown', NDropdown);
    app.component('NOrderList', NOrderList);
    app.component('NTimeline', NTimeline);
    app.component('NNotificationList', NNotificationList);
  }
};

export default NovaUI;
