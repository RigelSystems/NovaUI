import NOrderList from './NOrderList.vue';

export default {
  title: 'Components/NOrderList',
  component: NOrderList,
  argTypes: {
    updateUrl: { control: 'text' },
  },
};

const Template = (args) => ({
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
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: 'Item 1', order: 1 },
    { id: 2, name: 'Item 2', order: 2 },
    { id: 3, name: 'Item 3', order: 3 },
  ],
  updateUrl: 'http://localhost:3000/checklists/update_order',
};
