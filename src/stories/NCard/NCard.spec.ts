import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NCard from "./NCard.vue";

describe("NCard", () => {
    it('renders with title', () => {
        const { getByText } = render(NCard, { 
            props: { 
                title: 'Test Card Title'
            } 
        });
        expect(getByText('Test Card Title')).toBeTruthy();
    });

    it('renders with subtitle and content', () => {
        const { getByText } = render(NCard, { 
            props: { 
                title: 'Test Title',
                subtitle: 'Test Subtitle', 
                content: 'Test content here'
            } 
        });
        expect(getByText('Test Subtitle')).toBeTruthy();
        expect(getByText('Test content here')).toBeTruthy();
    });
});
