import NHeroSection from "./NHeroSection.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Section/NHeroSection",
  component: NHeroSection,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    actionButtons: { control: { type: 'object' } },
  },
  args: {
    title: 'Your title here',
    subtitle: 'Your subtitle here',
    content: 'Your content here',
    actionButtons: [
      { label: 'Action 1' },
      { label: 'Action 2' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "A hero section component."
      }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
