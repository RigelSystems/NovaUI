import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NDashboardTile from "./NDashboardTile.vue";

describe("NDashboardTile", () => {
    it('renders with title and value', () => {
        const { getByText } = render(NDashboardTile, { 
            props: { 
                title: 'Test Title', 
                icon: 'mdi-chart-line', 
                value: '123', 
                bottomText: 'Test bottom',
                colour: '#ff0000'
            } 
        });
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('123')).toBeTruthy();
    });

    it('displays bottom text', () => {
        const { getByText } = render(NDashboardTile, { 
            props: { 
                title: 'Title', 
                icon: 'mdi-chart', 
                value: '456', 
                bottomText: 'Bottom text',
                colour: '#00ff00'
            } 
        });
        expect(getByText('Bottom text')).toBeTruthy();
    });
});
