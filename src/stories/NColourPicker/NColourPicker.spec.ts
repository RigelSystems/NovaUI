import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NColourPicker from "./NColourPicker.vue";

describe("NColourPicker", () => {
    it('renders with label', () => {
        const { getByText } = render(NColourPicker, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NColourPicker, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
