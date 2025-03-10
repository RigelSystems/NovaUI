import NNavigationBar from "./NNavigationBar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Utilities/NNavigationBar",
  component: NNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: { type: 'array' } },
  },
  args: {
    links: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' },
    ]
  },
  parameters: {
    docs: {
      description: {
        component: "A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."
      }
    }
  }
}

export const Default = {};
