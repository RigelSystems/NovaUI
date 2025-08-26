import type { Meta, StoryFn } from "@storybook/vue3";
import NModal from "./NModal.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof NModal> = {
  title: "Components/NModal",
  component: NModal,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title text displayed in the modal header",
    },
    buttonLabel: {
      control: { type: "text" },
      description: "Label for the button that triggers the modal",
    },
  },
  args: {
    title: "Modal Title",
    buttonLabel: "Open Modal",
  },
  parameters: {
    docs: {
      description: {
        component: "A description of the NModal component with default, trigger and footer slots.",
      },
    },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: StoryFn<typeof NModal> = (args) => ({
  components: { NModal },
  setup() {
    return { args };
  },
  template: `
    <!-- Using trigger slot to customize the button text -->
    <NModal v-bind="args">
      <template #trigger>{{ args.buttonLabel }}</template>

      <!-- Default slot (body) -->
      <p>This is some example body content inside the default slot. You can use any markup here.</p>

      <!-- Footer slot -->
      <template #footer>
        <button class="n-modal__trigger" @click="alert('Save clicked!')">Save</button>
      </template>
    </NModal>
  `,
});
