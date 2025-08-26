import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPaintDisplay from "./NPaintDisplay.vue";

describe("NPaintDisplay", () => {
    it('renders with pixel data', () => {
        const pixelData = [
            ['#ff0000', '#00ff00'],
            ['#0000ff', '#ffffff']
        ];
        const { container } = render(NPaintDisplay, { 
            props: { 
                pixelData,
                size: 16
            } 
        });
        expect(container.querySelector('.pixel-icon')).toBeTruthy();
        expect(container.querySelectorAll('.pixel-row')).toHaveLength(2);
        expect(container.querySelectorAll('.pixel-cell')).toHaveLength(4);
    });

    it('renders with default size when not specified', () => {
        const pixelData = [['#000000']];
        const { container } = render(NPaintDisplay, { 
            props: { pixelData } 
        });
        const pixelCell = container.querySelector('.pixel-cell') as HTMLElement;
        expect(pixelCell.style.width).toBe('12px');
        expect(pixelCell.style.height).toBe('12px');
    });
});
