import { render } from '@testing-library/vue';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import NSelectInputFromRequest from "./NSelectInputFromRequest.vue";

// Mock fetch for testing
global.fetch = vi.fn();

describe("NSelectInputFromRequest", () => {
    const defaultProps = {
        name: 'test-select',
        accessToken: 'test-token',
        url: 'https://api.example.com/items',
        valueKey: 'id'
    };

    beforeEach(() => {
        vi.clearAllMocks();
        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => []
        });
    });

    it('renders with required props', () => {
        const { container } = render(NSelectInputFromRequest, { props: defaultProps });
        const select = container.querySelector('select');
        expect(select).toBeTruthy();
        expect(select?.name).toBe('test-select');
        expect(select?.id).toBe('test-select');
    });

    it('renders with label when provided', () => {
        const props = { ...defaultProps, label: 'Select an item' };
        const { getByText } = render(NSelectInputFromRequest, { props });
        expect(getByText('Select an item')).toBeTruthy();
    });

    it('makes API request with correct headers', () => {
        render(NSelectInputFromRequest, { props: defaultProps });
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer test-token'
            }
        });
    });
});
