import NDashboardTile from "./NDashboardTile.vue";
import { fn } from '@storybook/test';

export default {
  title: "Layout/NDashboardTile",
  component: NDashboardTile,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    icon: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    bottomText: { control: { type: 'text' } },
  },
  args: {
    title: 'Total Visitors',
    icon: 'mdi-account-group-outline',
    value: '4,582',
    bottomText: '9.8% from last month',
  },
  parameters: {
    docs: {
      description: {
        component: "A dashboard tile component displaying an icon, a title, a value, and a bottom text.",
      },
    },
  },
};

export const Default = {};
