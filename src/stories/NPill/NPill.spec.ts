import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPill from "./NPill.vue";

describe("NPill", () => {
    it('renders with label', () => {
        const { getByText } = render(NPill, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NPill, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
