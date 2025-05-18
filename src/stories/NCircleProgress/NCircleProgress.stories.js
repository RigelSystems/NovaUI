import NCircleProgress from "./NCircleProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "NCircleProgress",
  component: NCircleProgress,
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        default: 0,
      }
    }
    ,total: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        default: 0,
      }
    }
  },
  args: {
    current: 5,
    total: 6,
    size: 35,
    fontSize: 33,
    strokeWidth: 11,  
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
