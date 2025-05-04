import NTabPreview from './NTabPreview.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof NTabPreview> = {
  component: NTabPreview,
  title: 'Layout/Tabs/NTabPreview',
};

export default meta;

type Story = StoryObj<typeof NTabPreview>;

export const Default: Story = {
  render: (args) => ({
    components: { NTabPreview },
    setup: () => ({ args }),
    template: '<NTabPreview v-bind="args" />',
  }),
};
