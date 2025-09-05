import { render } from '@testing-library/vue';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import NDataGrid from "./NDataGrid.vue";

// Mock fetch to prevent actual network requests
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ 
      data: [], 
      total: 0,
      perPage: 10,
      currentPage: 1 
    }),
  })
) as any;

describe("NDataGrid", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders data grid', () => {
        const { container } = render(NDataGrid, { 
            props: { 
                url: 'https://example.com/api/test',
                method: 'GET',
                params: {}
            } 
        });
        expect(container.querySelector('.n-data-grid')).toBeTruthy();
    });

    it('displays loading state initially', () => {
        const { getByText } = render(NDataGrid, { 
            props: { 
                url: 'https://example.com/api/test',
                method: 'GET', 
                params: {}
            } 
        });
        expect(getByText('Loading...')).toBeTruthy();
    });
});
