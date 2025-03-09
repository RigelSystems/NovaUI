import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNavigationBar from "./NNavigationBar.vue";

describe("NNavigationBar", () => {
    it('renders with label', () => {
        const { getByText } = render(NNavigationBar, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NNavigationBar, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
