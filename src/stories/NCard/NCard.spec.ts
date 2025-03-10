import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NCard from "./NCard.vue";

describe("NCard", () => {
    it('renders with label', () => {
        const { getByText } = render(NCard, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NCard, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
