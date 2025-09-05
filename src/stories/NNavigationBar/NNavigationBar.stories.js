import NNavigationBar from "./NNavigationBar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Navigation/NNavigationBar",
  component: NNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: { type: 'array' } },
    mobileBottomLinks: { control: { type: 'array' } },
    showMobileBottomLinks: { control: { type: 'boolean' } },
  },
  args: {
    links: [
      { label: 'Home', url: '/home' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' },
    ],
    mobileBottomLinks: [
      { url: '/home', icon: 'mdi-home-account', label: 'Home' },
      { url: '/about', icon: 'mdi-information', label: 'About' },
      { url: '/contact', icon: 'mdi-email', label: 'Contact' },
    ],
    currentPath: '/home',
    showMobileBottomLinks: true,
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
  render(args) {
    return {
      components: { NNavigationBar },
      setup() {
        return { args };
      },
      template: `
        <div style="height: 400px;">
          <NNavigationBar v-bind="args">
            <template #logo>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
                <template #user>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
          </NNavigationBar>
        </div>
      `,
    };
  }
};
