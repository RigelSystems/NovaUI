import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NCircleProgress from "./NCircleProgress.vue";

describe("NCircleProgress", () => {
    it('renders with label', () => {
        const { getByText } = render(NCircleProgress, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NCircleProgress, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
