import NSelect from './NSelect.vue'

export default {
  title: 'Inputs/NSelect',
  component: NSelect,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'array' },
    placeholder: { control: 'text' },
  },
}

const Template = (args) => ({
  components: { NSelect },
  setup() {
    return { args }
  },
  template: '<NSelect v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select an option',
  value: '',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  placeholder: 'Choose an option',
} 