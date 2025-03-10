import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NButton from './NButton.vue';

describe('NButton', () => {
  it('renders with label', () => {
    const { getByText } = render(NButton, { props: { label: 'Click me' } });
    expect(getByText('Click me')).toBeTruthy();
  });

  it('emits click event', async () => {
    const { getByRole, emitted } = render(NButton, { props: { label: 'Click' } });
    await fireEvent.click(getByRole('button'));
    expect(emitted()).toHaveProperty('click');
  });
});
