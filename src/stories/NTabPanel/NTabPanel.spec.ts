import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabPanel from "./NTabPanel.vue";

describe("NTabPanel", () => {
    it('renders with label', () => {
        const { getByText } = render(NTabPanel, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTabPanel, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
