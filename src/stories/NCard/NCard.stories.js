import NButton from "../NButton/NButton.vue";
import NCard from "./NCard.vue";
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/NCard",
  component: NCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    actionButtons: { control: { type: 'object' } },
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    content: 'Loads of information about this card and what it does.',
    actionButtons: [
      { label: 'Action 1' },
      { label: 'Action 2' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "A simple card component.",
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
