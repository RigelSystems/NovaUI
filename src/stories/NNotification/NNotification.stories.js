import NNotification from "./NNotification.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Feedback/NNotification",
  component: NNotification,
  tags: ['autodocs'],
  argTypes: {
    message: { control: { type: 'text' } },
    time: { control: { type: 'text' } },
  },
  args: {
    message: '<p><b>John Doe</b> has sent you a message</p>',
    time: 'Just now',
    actionButtons: [
      {
        label: 'View',
        primary: true
      },
      {
        label: 'Dismiss',
        primary: false
      }
    ]
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
