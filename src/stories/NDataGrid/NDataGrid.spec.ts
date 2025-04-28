import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDataGrid from "./NDataGrid.vue";

describe("NDataGrid", () => {
    it('renders with label', () => {
        const { getByText } = render(NDataGrid, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NDataGrid, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});
