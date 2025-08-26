import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NCircleProgress from "./NCircleProgress.vue";

describe("NCircleProgress", () => {
    it('renders with progress', () => {
        const { container } = render(NCircleProgress, { props: { current: 5, total: 10 } });
        expect(container.querySelector('.circle-progress')).toBeTruthy();
    });

    it('displays correct percentage', () => {
        const { getByText } = render(NCircleProgress, { props: { current: 3, total: 10 } });
        expect(getByText('30%')).toBeTruthy();
    });
});
