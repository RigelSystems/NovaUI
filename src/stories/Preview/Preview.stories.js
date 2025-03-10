import Preview from "./Preview.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Previews/Basic",
  component: Preview,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        component: "An example of a site built using NovaUI",
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
