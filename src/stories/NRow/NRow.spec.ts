import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NRow from "./NRow.vue";

describe("NRow", () => {
    it('renders with label', () => {
        const { getByText } = render(NRow, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NRow, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
