import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDropdown from "./NDropdown.vue";

describe("NDropdown", () => {
    it('renders with label', () => {
        const { getByText } = render(NDropdown, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NDropdown, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
