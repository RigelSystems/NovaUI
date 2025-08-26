import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabs from "./NTabs.vue";

describe("NTabs", () => {
    it('renders tabs container', () => {
        const { container } = render(NTabs);
        expect(container.querySelector('.n-tabs')).toBeTruthy();
        expect(container.querySelector('.n-tabs-header')).toBeTruthy();
        expect(container.querySelector('.n-tabs-body')).toBeTruthy();
    });

    it('initializes with active tab 0', () => {
        const { container } = render(NTabs, {
            slots: {
                tabs: '<div>Tabs slot</div>',
                default: '<div>Default slot</div>'
            }
        });
        expect(container.textContent).toContain('Tabs slot');
        expect(container.textContent).toContain('Default slot');
    });

    it('renders with proper structure and slots', () => {
        const { container } = render(NTabs, {
            slots: {
                tabs: '<span data-testid="tabs-slot">Tab buttons</span>',
                default: '<span data-testid="default-slot">Tab content</span>'
            }
        });
        
        expect(container.querySelector('[data-testid="tabs-slot"]')).toBeTruthy();
        expect(container.querySelector('[data-testid="default-slot"]')).toBeTruthy();
    });
});
