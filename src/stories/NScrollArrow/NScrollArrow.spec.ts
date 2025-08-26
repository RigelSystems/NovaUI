import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NScrollArrow from "./NScrollArrow.vue";

describe("NScrollArrow", () => {
    it('renders the scroll arrow component', () => {
        const { container } = render(NScrollArrow);
        expect(container.querySelector('.home-arrow-container')).toBeTruthy();
        expect(container.querySelector('.home-arrow-wrapper')).toBeTruthy();
    });

    it('renders all arrow parts', () => {
        const { container } = render(NScrollArrow);
        expect(container.querySelector('.arrow-top')).toBeTruthy();
        expect(container.querySelector('.arrow-mid')).toBeTruthy();
        expect(container.querySelector('.arrow-bottom')).toBeTruthy();
    });
});
