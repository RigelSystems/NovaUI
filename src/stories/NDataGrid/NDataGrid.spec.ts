import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDataGrid from "./NDataGrid.vue";

describe("NDataGrid", () => {
    it('renders data grid', () => {
        const { container } = render(NDataGrid, { 
            props: { 
                url: '/test',
                method: 'GET',
                params: {}
            } 
        });
        expect(container.querySelector('.n-data-grid')).toBeTruthy();
    });

    it('displays loading state', () => {
        const { getByText } = render(NDataGrid, { 
            props: { 
                url: '/test',
                method: 'GET', 
                params: {}
            } 
        });
        expect(getByText('Loading...')).toBeTruthy();
    });
});
