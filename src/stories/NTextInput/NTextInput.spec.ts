import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTextInput from "./NTextInput.vue";

describe("NTextInput", () => {
    it('renders with label', () => {
        const { getByText } = render(NTextInput, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTextInput, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
