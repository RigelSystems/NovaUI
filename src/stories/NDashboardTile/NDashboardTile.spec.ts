import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDashboardTile from "./NDashboardTile.vue";

describe("NDashboardTile", () => {
    it('renders with label', () => {
        const { getByText } = render(NDashboardTile, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NDashboardTile, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
