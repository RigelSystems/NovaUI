import NOrderList from './NOrderList.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/NOrderList',
  component: NOrderList,
  tags: ['autodocs'],
  argTypes: {
    updateUrl: { control: { type: 'text' } },
    items: { control: { type: 'object' } },
  },
  args: {
    updateUrl: 'http://localhost:3000/checklists/update_order',
    items: [
      { id: 1, name: 'Item 1', order: 1 },
      { id: 2, name: 'Item 2', order: 2 },
      { id: 3, name: 'Item 3', order: 3 },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "An ordered list component that allows reordering via drag-and-drop."
      }
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  render: (args) => ({
    components: { NOrderList },
    setup() {
      return { args };
    },
    template: `
      <NOrderList v-bind="args">
        <template #default="item">
          <p>{{ item.name }}</p>
        </template>
      </NOrderList>
    `,
  }),
};
