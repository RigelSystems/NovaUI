import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabs from "./NTabs.vue";

describe("NTabs", () => {
    it('renders with label', () => {
        const { getByText } = render(NTabs, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NTabs, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
