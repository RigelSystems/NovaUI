import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabPreview from "./NTabPreview.vue";

describe("NTabPreview", () => {
    it('renders tab preview component', () => {
        const { container } = render(NTabPreview);
        expect(container.querySelector('.n-tabs')).toBeTruthy();
    });

    it('displays overview and details tab content', () => {
        const { getByText } = render(NTabPreview);
        expect(getByText('Overview')).toBeTruthy();
        expect(getByText('Details')).toBeTruthy();
        expect(getByText('This is the Overview content.')).toBeTruthy();
    });

    it('renders with tab structure', () => {
        const { container } = render(NTabPreview);
        const tabsHeader = container.querySelector('.n-tabs-header');
        const tabsBody = container.querySelector('.n-tabs-body');
        
        expect(tabsHeader).toBeTruthy();
        expect(tabsBody).toBeTruthy();
    });
});
