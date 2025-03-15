import NPaint from "./NPaint.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "NPaint",
  component: NPaint,
  tags: ['autodocs'],
  argTypes: {
    gridX: { control: { type: 'number' } },
    gridY: { control: { type: 'number' } },
  },
  args: {
    gridX: 15,
    gridY: 15,
  },
  parameters: {
    docs: {
      description: {
        component: "A simple paint component",
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
