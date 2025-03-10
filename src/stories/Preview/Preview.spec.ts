import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Preview from "./Preview.vue";

describe("Preview", () => {
    it('renders with label', () => {
        const { getByText } = render(Preview, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(Preview, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
