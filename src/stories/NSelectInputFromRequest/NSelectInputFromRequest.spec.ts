import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NSelectInputFromRequest from "./NSelectInputFromRequest.vue";

describe("NSelectInputFromRequest", () => {
    it('renders with label', () => {
        const { getByText } = render(NSelectInputFromRequest, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NSelectInputFromRequest, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
