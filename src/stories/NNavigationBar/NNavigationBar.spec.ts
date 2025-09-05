import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNavigationBar from "./NNavigationBar.vue";

describe("NNavigationBar", () => {
    it('renders navigation bar', () => {
        const { container } = render(NNavigationBar, { 
            props: { 
                links: [
                    { label: 'Home', url: '/' },
                    { label: 'About', url: '/about' }
                ]
            }
        });
        expect(container.querySelector('.n-navigation-bar')).toBeTruthy();
    });

    it('renders links when provided', () => {
        const { getAllByText } = render(NNavigationBar, { 
            props: { 
                links: [
                    { label: 'Home', url: '/' },
                    { label: 'About', url: '/about' }
                ]
            }
        });
        expect(getAllByText('Home').length).toBe(2); // desktop and mobile
        expect(getAllByText('About').length).toBe(2); // desktop and mobile
    });
});
