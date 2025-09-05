import NTimeline from "./NTimeline.vue";
import dayjs from "dayjs";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Data Display/NTimeline",
  component: NTimeline,
  tags: ["autodocs"],
  argTypes: {
    startDateTime: { control: "text" },
    endDateTime: { control: "text" },
    minuteInterval: { control: "number" },
    items: { control: "object" },
  },
  args: {
    // Provide some sensible defaults for the timeline range and interval
    startDateTime: dayjs().startOf("hour").subtract(1, "hour").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: dayjs().startOf("hour").add(5, "hour").format("YYYY-MM-DDTHH:mm:ss"),
    minuteInterval: 15,
    // Sample timeline items
    items: [
      {
        startTime: dayjs().startOf("hour").subtract(30, "minute").format("YYYY-MM-DDTHH:mm:ss"),
        duration: 60,
        content: "Meeting with Team",
        color: "#fac7c3",
      },
      {
        startTime: dayjs().startOf("hour").add(30, "minute").format("YYYY-MM-DDTHH:mm:ss"),
        duration: 90,
        content: "Code Review",
        color: "#c7fac8",
        link: "https://example.com",
      },
      {
        startTime: dayjs().startOf("hour").add(35, "minute").format("YYYY-MM-DDTHH:mm:ss"),
        duration: 30,
        content: "Brainstorming Session",
        color: "#c7dcfa",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "A vertical timeline component that displays events by start time and duration. It shows a live red line for the current time and can handle overlapping items by positioning them in separate columns.",
      },
    },
  },
};

// By default, Storybook will create a story using the args defined above.
export const Default = {};
