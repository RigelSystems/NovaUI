import NDropdown from "./NDropdown.vue";

export default {
  title: "NDropdown",
  component: NDropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" }, // Allows changing button label in Storybook controls
  },
  args: {
    label: "Toggle Dropdown",
  },
};

// Default Story with Slot Content
export const Default = {
  args: {
    label: "Click Me",
  },
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
