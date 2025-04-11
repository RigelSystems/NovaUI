import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNotification from "./NNotification.vue";

describe("NNotification", () => {
    it('renders with label', () => {
        const { getByText } = render(NNotification, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NNotification, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
