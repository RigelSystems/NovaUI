import NNotificationList from "./NNotificationList.vue";
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "NNotificationList",
  component: NNotificationList,
  tags: ['autodocs'],
  argTypes: {
    notifications: { control: { type: 'text' } },
  },
  args: {
    notifications: [
      {
        message: "<p><b>John Doe</b> has sent you a friend request.</p>",
        time: "1 hour ago",
        actionButtons: [
          {
            label: "Accept",
            primary: true
          },
          {
            label: "Decline",
            primary: false
          }
        ]
      },
      {
        message: "<p><b>John Doe</b> has sent you a friend request.</p>",
        time: "1 hour ago",
        actionButtons: [
          {
            label: "Accept",
            primary: true
          },
          {
            label: "Decline",
            primary: false
          }
        ]
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
