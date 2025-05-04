import { color } from "@storybook/theming";
import NPill from "./NPill.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/NPill",
  component: NPill,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      }
    },
  },
  args: {
    label: 'Pill',
    color: 'danger',
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
