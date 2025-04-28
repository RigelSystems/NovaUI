import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NModal from "./NModal.vue";

describe("NModal", () => {
    it('renders with label', () => {
        const { getByText } = render(NModal, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NModal, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
