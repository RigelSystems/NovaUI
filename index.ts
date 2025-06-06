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
import NPaintDisplay from './src/stories/NPaintDisplay/NPaintDisplay.vue';
import NTimeline from './src/stories/NTimeline/NTimeline.vue';
import NNotificationList from './src/stories/NNotificationList/NNotificationList.vue';
import NModal from './src/stories/NModal/NModal.vue';
import NColourPicker from './src/stories/NColourPicker/NColourPicker.vue';
import NDashboardTile from './src/stories/NDashboardTile/NDashboardTile.vue';
import NDataGrid from './src/stories/NDataGrid/NDataGrid.vue';
import NScrollArrow from './src/stories/NScrollArrow/NScrollArrow.vue';
import NTabs from './src/stories/NTabs/NTabs.vue';
import NTab from './src/stories/NTab/NTab.vue';
import NTabPanel from './src/stories/NTabPanel/NTabPanel.vue';
import NCircleProgress from './src/stories/NCircleProgress/NCircleProgress.vue';
import NTimeInput from './src/stories/NTimeInput/NTimeInput.vue';
import NSelectInputFromRequest from './src/stories/NSelectInputFromRequest/NSelectInputFromRequest.vue';
import NSelect from './src/stories/NSelect/NSelect.vue';
import '@mdi/font/css/materialdesignicons.css';
import './src/assets/shared.css';

// Define the plugin as a plain Plugin, no generics
const NovaUI: Plugin = {
  install(app: App) {
    app.component('NButton', NButton);
    app.component('NPaint', NPaint);
    app.component('NPaintDisplay', NPaintDisplay);
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
    app.component('NModal', NModal);
    app.component('NColourPicker', NColourPicker);
    app.component('NDashboardTile', NDashboardTile);
    app.component('NDataGrid', NDataGrid);
    app.component('NScrollArrow', NScrollArrow);
    app.component('NTabs', NTabs);
    app.component('NTab', NTab);
    app.component('NTabPanel', NTabPanel);
    app.component('NCircleProgress', NCircleProgress);
    app.component('NTimeInput', NTimeInput);
    app.component('NSelectInputFromRequest', NSelectInputFromRequest);
    app.component('NSelect', NSelect);
  }
};

export default NovaUI;
