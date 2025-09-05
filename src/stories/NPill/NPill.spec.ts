import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPill from "./NPill.vue";

describe("NPill", () => {
    it('renders with label', () => {
        const { getByText } = render(NPill, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('renders as a span element', () => {
        const { container } = render(NPill, { props: { label: 'Test' } });
        expect(container.querySelector('span.n-pill')).toBeTruthy();
    });

    it('applies correct color class', () => {
        const { container } = render(NPill, { 
            props: { 
                label: 'Test',
                color: 'primary'
            } 
        });
        const pill = container.querySelector('.n-pill');
        expect(pill?.classList.contains('n-primary')).toBe(true);
    });

    it('applies default color class when no color specified', () => {
        const { container } = render(NPill, { props: { label: 'Test' } });
        const pill = container.querySelector('.n-pill');
        expect(pill?.classList.contains('n-default')).toBe(true);
    });
});
