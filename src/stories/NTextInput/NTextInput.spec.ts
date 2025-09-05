import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTextInput from "./NTextInput.vue";

describe("NTextInput", () => {
    it('renders with label', () => {
        const { getByText } = render(NTextInput, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('renders text input field', () => {
        const { getByRole } = render(NTextInput, { props: { label: 'Input' } });
        expect(getByRole('textbox')).toBeTruthy();
    });
});
