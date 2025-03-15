import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPaint from "./NPaint.vue";

describe("NPaint", () => {
    it('renders with label', () => {
        const { getByText } = render(NPaint, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NPaint, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
