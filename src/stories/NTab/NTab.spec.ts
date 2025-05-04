import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTab from "./NTab.vue";

describe("NTab", () => {
    it('renders with label', () => {
        const { getByText } = render(NTab, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTab, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
