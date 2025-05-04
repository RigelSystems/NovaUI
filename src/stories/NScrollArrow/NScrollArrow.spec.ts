import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NScrollArrow from "./NScrollArrow.vue";

describe("NScrollArrow", () => {
    it('renders with label', () => {
        const { getByText } = render(NScrollArrow, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NScrollArrow, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
