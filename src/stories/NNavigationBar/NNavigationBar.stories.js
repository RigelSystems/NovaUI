import NNavigationBar from "./NNavigationBar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/NNavigationBar",
  component: NNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: { type: 'array' } },
    mobileBottomLinks: { control: { type: 'array' } },
  },
  args: {
    links: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' },
    ],
    mobileBottomLinks: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Service', url: '/terms' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."
      },
      source: {
        type: "code",
        state: "open", // Ensure the code panel is open by default
      },
      iframeHeight: '500px', 
    }
  }
}

export const Default = {
  render (args) {
    return {
      components: { NNavigationBar },
      setup() {
        return { args };
      },
      template: `
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      `,
    };
  }
};
