import NRow from "./NRow.vue";
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "NRow",
  component: NRow,
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
        component: "A description of the component."
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
