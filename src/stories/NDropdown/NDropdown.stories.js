import NDropdown from "./NDropdown.vue";

export default {
  title: "Components/NDropdown",
  component: NDropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Toggle Dropdown",
  },
};

// Default Story with Slot Content
export const WithSlots = {
  render: (args) => ({
    components: { NDropdown },
    setup() {
      return { args };
    },
    template: `<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>`,
      },
    },
  },
};

export const WithProps = {
  args: {
    label: "Click Me",
    content: 'Some great content here!!',
    chevron: true,
  },
}
