import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDropdown from "./NDropdown.vue";

describe("NDropdown", () => {
    it('renders with label', () => {
        const { getByText } = render(NDropdown, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('renders with content', () => {
        const { getByText } = render(NDropdown, { 
            props: { 
                label: 'Dropdown', 
                content: 'Hidden content' 
            } 
        });
        expect(getByText('Dropdown')).toBeTruthy();
        expect(getByText('Hidden content')).toBeTruthy();
    });

    it('toggles dropdown when header is clicked', async () => {
        const { container } = render(NDropdown, { 
            props: { 
                label: 'Toggle me', 
                content: 'Content' 
            } 
        });
        
        const header = container.querySelector('.n-dropdown__header');
        const content = container.querySelector('.n-dropdown__content');
        
        expect(header).toBeTruthy();
        expect(content).toBeTruthy();
        
        // Initially closed
        expect(content?.classList.contains('n-dropdown__content--open')).toBe(false);
        
        // Click to open
        await fireEvent.click(header!);
        expect(content?.classList.contains('n-dropdown__content--open')).toBe(true);
        
        // Click to close
        await fireEvent.click(header!);
        expect(content?.classList.contains('n-dropdown__content--open')).toBe(false);
    });

    it('shows chevron by default', () => {
        const { container } = render(NDropdown, { props: { label: 'Test' } });
        expect(container.querySelector('.n-dropdown__caret')).toBeTruthy();
    });

    it('hides chevron when chevron prop is false', () => {
        const { container } = render(NDropdown, { 
            props: { 
                label: 'Test', 
                chevron: false 
            } 
        });
        expect(container.querySelector('.n-dropdown__caret')).toBeFalsy();
    });
});
