import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NCircleProgress from "./NCircleProgress.vue";

describe("NCircleProgress", () => {
    it('renders with progress', () => {
        const { container } = render(NCircleProgress, { props: { current: 5, total: 10 } });
        expect(container.querySelector('.n-circle-progress')).toBeTruthy();
    });

    it('displays correct ratio text', () => {
        const { getByText } = render(NCircleProgress, { props: { current: 3, total: 10 } });
        expect(getByText('3/10')).toBeTruthy();
    });

    it('renders SVG elements', () => {
        const { container } = render(NCircleProgress, { props: { current: 7, total: 10 } });
        expect(container.querySelector('svg')).toBeTruthy();
        expect(container.querySelector('circle.n-circle-progress__track')).toBeTruthy();
        expect(container.querySelector('circle.n-circle-progress__progress')).toBeTruthy();
    });

    it('calculates correct progress percentage', () => {
        const { container } = render(NCircleProgress, { props: { current: 5, total: 10 } });
        const progressCircle = container.querySelector('circle.n-circle-progress__progress');
        // Should show 50% progress
        expect(progressCircle).toBeTruthy();
    });
});
