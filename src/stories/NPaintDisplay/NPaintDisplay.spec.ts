import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPaintDisplay from "./NPaintDisplay.vue";

describe("NPaintDisplay", () => {
    it('renders with label', () => {
        const { getByText } = render(NPaintDisplay, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NPaintDisplay, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
