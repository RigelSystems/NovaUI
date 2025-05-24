import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTimeInput from "./NTimeInput.vue";

describe("NTimeInput", () => {
    it('renders with label', () => {
        const { getByText } = render(NTimeInput, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTimeInput, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
