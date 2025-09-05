import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NHeroSection from "./NHeroSection.vue";
import NButton from "../NButton/NButton.vue";

describe("NHeroSection", () => {
    it('renders with title and content', () => {
        const { getByText } = render(NHeroSection, { 
            props: { 
                title: 'Hero Title', 
                subtitle: 'Hero Subtitle',
                content: 'Hero content text'
            },
            global: {
                components: { NButton }
            }
        });
        expect(getByText('Hero Title')).toBeTruthy();
        expect(getByText('Hero Subtitle')).toBeTruthy();
        expect(getByText('Hero content text')).toBeTruthy();
    });

    it('renders with correct layout class', () => {
        const { container } = render(NHeroSection, { 
            props: { 
                title: 'Hero Title',
                layout: 'left'
            },
            global: {
                components: { NButton }
            }
        });
        expect(container.querySelector('.n-hero-section-left')).toBeTruthy();
    });
});
