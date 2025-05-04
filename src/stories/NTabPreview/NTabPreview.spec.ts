import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabPreview from "./NTabPreview.vue";

describe("NTabPreview", () => {
    it('renders with label', () => {
        const { getByText } = render(NTabPreview, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTabPreview, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
