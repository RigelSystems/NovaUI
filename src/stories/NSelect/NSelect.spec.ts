import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NSelect from './NSelect.vue'

describe('NSelect', () => {
  it('renders properly', () => {
    const wrapper = mount(NSelect, {
      props: {
        label: 'Test Label',
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ],
      },
    })
    expect(wrapper.find('.n-select').exists()).toBe(true)
    expect(wrapper.find('.n-input__label').text()).toBe('Test Label')
  })
}) 