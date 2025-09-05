import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NPaint from "./NPaint.vue";
import NButton from "../NButton/NButton.vue";

describe("NPaint", () => {
    it('renders paint grid', () => {
        const { container } = render(NPaint, { 
            props: { 
                gridX: 4, 
                gridY: 4 
            },
            global: {
                components: { NButton }
            }
        });
        expect(container.querySelector('.pixel-canvas')).toBeTruthy();
    });

    it('renders with default grid size', () => {
        const { container } = render(NPaint, {
            global: {
                components: { NButton }
            }
        });
        expect(container.querySelector('.pixel-canvas')).toBeTruthy();
    });
});
