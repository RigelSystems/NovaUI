import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTabPanel from "./NTabPanel.vue";

describe("NTabPanel", () => {
    it('renders when active tab matches index', () => {
        const { container } = render(NTabPanel, { 
            props: { 
                index: 1, 
                activeTab: 1 
            },
            slots: {
                default: 'Panel content'
            }
        });
        expect(container.textContent).toContain('Panel content');
    });

    it('does not render when active tab does not match index', () => {
        const { container } = render(NTabPanel, { 
            props: { 
                index: 1, 
                activeTab: 0 
            },
            slots: {
                default: 'Panel content'
            }
        });
        expect(container.textContent).not.toContain('Panel content');
    });

    it('switches visibility based on activeTab prop changes', async () => {
        const { container, rerender } = render(NTabPanel, { 
            props: { 
                index: 2, 
                activeTab: 0 
            },
            slots: {
                default: 'Tab 2 content'
            }
        });
        
        expect(container.textContent).not.toContain('Tab 2 content');
        
        await rerender({ index: 2, activeTab: 2 });
        expect(container.textContent).toContain('Tab 2 content');
    });
});
