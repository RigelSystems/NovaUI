import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTimeline from "./NTimeline.vue";

describe("NTimeline", () => {
    it('renders with label', () => {
        const { getByText } = render(NTimeline, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTimeline, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
