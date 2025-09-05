import type { Meta, StoryObj } from '@storybook/vue3';
import { http, HttpResponse, delay } from 'msw';
import NDataGrid from './NDataGrid.vue';

const meta: Meta<typeof NDataGrid> = {
  component: NDataGrid,
  title: 'Data Display/NDataGrid',
};

export default meta;

type Story = StoryObj<typeof NDataGrid>;

export const Default: Story = {
  args: {
    url: '/mock/data',
    method: 'GET',
    params: {},
  },
};

// Mocked dataset for success scenario
const MockData = {
  headers: ['Name', 'Age'],
  data: [
    { Name: 'Alex', Age: 28 },
    { Name: 'Sam', Age: 35 },
    { Name: 'Taylor', Age: 24 },
  ],
};

export const MockedSuccess: Story = {
  args: {
    url: '/mock/data',
    method: 'GET',
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
    method: 'GET',
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