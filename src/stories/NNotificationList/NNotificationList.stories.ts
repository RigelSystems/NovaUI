import type { Meta, StoryObj } from '@storybook/vue3';
import { http, HttpResponse, delay } from 'msw';
import NNotificationList from './NNotificationList.vue';

const meta: Meta<typeof NNotificationList> = {
  component: NNotificationList,
  title: 'Social/Notifications/NNotificationList',
};

export default meta;

type Story = StoryObj<typeof NNotificationList>;

export const Default: Story = {
  args: {
    url: '/mock/data',
    method: 'get',
    params: {},
  },
};

// Mocked dataset for success scenario
const MockData = [
  {
    message: 'Notification 1',
    time: '1 hour ago',
    actionButtons: [
      { label: 'View', action: () => console.log('View clicked') },
      { label: 'Dismiss', action: () => console.log('Dismiss clicked') },
    ]
  },
  {
    message: 'Notification 1',
    time: '1 hour ago',
    actionButtons: [
      { label: 'View', action: () => console.log('View clicked') },
      { label: 'Dismiss', action: () => console.log('Dismiss clicked') },
    ]
  }
];

export const MockedSuccess: Story = {
  args: {
    url: '/mock/data',
    method: 'get',
    params: {},
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/mock/data', async () => {
          await delay(500); // simulate loading delay
          return HttpResponse.json(MockData);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  args: {
    url: '/mock/data',
    method: 'get',
    params: {},
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/mock/data', async () => {
          await delay(500);
          return new HttpResponse(null, { status: 403 });
        }),
      ],
    },
  },
};