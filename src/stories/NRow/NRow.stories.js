import NRow from "./NRow.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Layout/NRow",
  component: NRow,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    cols: {sm: [100]},
  },
  parameters: {
    docs: {
      description: {
        component: "A description of the component."
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
